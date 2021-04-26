"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const message_1 = require("../utils/message");
const webhooks_1 = require("../service/webhooks");
// Import required AWS SDK clients and commands for Node.js
const client_sns_1 = require("@aws-sdk/client-sns");
// Here you can set up the SNS layout
const paramInterface_1 = require("../model/sns/paramInterface");
// Set the AWS Region
const REGION = process.env.REGION ? process.env.region : "us-east-2";
const ARN = process.env.ARN
    ? process.env.ARN
    : "arn:aws:sns:us-east-2:041437524882:email-gun";
// Create SNS service object
const sns = new client_sns_1.SNSClient({ region: REGION });
class WebhooksController extends webhooks_1.WebhooksService {
    constructor(hooks) {
        super(hooks);
    }
    /**
     * Save hook but controls if event data has the right format
     * @param {*} event
     */
    async saveHook(event /* ,context?: Context */) {
        const params = JSON.parse(event.body)["event-data"];
        // check if it's from mailgun
        if (params["headerers"]["messages"]["message-id"].includes("mailgun.org"))
            process.env["EMAILPROVIDER"] = "Mailgun";
        else
            return {
                statusCode: 404,
                body: JSON.stringify("Message doesn't come from Mailgun."),
            };
        // send the SNS
        this.sendSNS(params, paramInterface_1.message);
        try {
            const result = await this.createWebhookData({
                ip: params.ip,
                event: params.event,
                timestamp: params.timestamp,
                recipient: params.recipient,
                id: params.id,
            });
            return message_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
    async sendSNS(_params, messageObj) {
        const messageText = {};
        for (var property in messageObj) {
            if (!messageObj.hasOwnProperty("provider")) {
                messageText[property] = params[property];
            }
            else {
                messageText[property] = process.env.EMAILPROVIDER;
            }
        }
        var params = {
            Message: JSON.stringify(messageText),
            TopicArn: ARN, // TOPIC_ARN
        };
        try {
            const data = await sns.send(new client_sns_1.PublishCommand(params));
            console.log("Message sent to the topic");
            console.log("MessageID is " + data.MessageId);
            return message_1.MessageUtil.success(data);
        }
        catch (err) {
            console.error(err, err.stack);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
}
exports.WebhooksController = WebhooksController;
