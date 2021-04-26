import { Model } from "mongoose";
import { MessageUtil } from "../utils/message";
import { WebhooksService } from "../service/webhooks";

// Import required AWS SDK clients and commands for Node.js
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

import { SaveWebhookDTO } from "../model/dto/saveWebhookDTO";

// Here you can set up the SNS layout
import { message } from "../model/sns/paramInterface";

// Set the AWS Region
const REGION = process.env.REGION ? process.env.region : "us-east-2";
const ARN = process.env.ARN
  ? process.env.ARN
  : "arn:aws:sns:us-east-2:041437524882:email-gun";

// Create SNS service object
const sns = new SNSClient({ region: REGION });

export class WebhooksController extends WebhooksService {
  public EmailProvider: String;
  constructor(hooks: Model<any>) {
    super(hooks);
  }

  /**
   * Save hook but controls if event data has the right format
   * @param {*} event
   */
  async saveHook(event: any /* ,context?: Context */) {
    const params: SaveWebhookDTO = JSON.parse(event.body)["event-data"];

    // check if it's from mailgun
    if (params["message"]["headers"]["message-id"].includes("mailgun.org"))
      process.env["EMAILPROVIDER"] = "Mailgun";
    else
      return {
        statusCode: 404,
        body: JSON.stringify("Message doesn't come from Mailgun."),
      };

    // send the SNS
    this.sendSNS(params, message);

    try {
      const result = await this.createWebhookData({
        ip: params.ip,
        event: params.event,
        timestamp: params.timestamp,
        recipient: params.recipient,
        id: params.id,
      });

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  async sendSNS(_params: SaveWebhookDTO, messageObj: any) {
    interface LooseObject {
      [key: string]: any;
    }

    // create messageText by using the `_params` key-value pairs
    const messageText: LooseObject = {};

    for (let property in messageObj) {
      if (!messageObj.hasOwnProperty("provider")) {
        messageText[property] = _params[property];
      } else {
        messageText[property] = process.env.EMAILPROVIDER;
      }
    }

    // params for sending
    const params = {
      Message: JSON.stringify(messageText), // MESSAGE_TEXT
      TopicArn: ARN, // TOPIC_ARN
    };

    try {
      const data = await sns.send(new PublishCommand(params));
      console.log("Message sent to the topic");
      console.log("MessageID is " + data.MessageId);

      return MessageUtil.success(data);
    } catch (err) {
      console.error(err, err.stack);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
