import { Context } from "aws-lambda";
import { Model } from "mongoose";
import { MessageUtil } from "../utils/message";
import { WebhooksService } from "../service/webhooks";
import { SaveWebhookDTO } from "../model/dto/saveWebhookDTO";

export class WebhooksController extends WebhooksService {
  constructor(webhooks: Model<any>) {
    super(webhooks);
  }

  /**
   * Create book
   * @param {*} event
   */
  async create(event: any, context?: Context) {
    // if (context) console.log("functionName", context.functionName);
    const params: SaveWebhookDTO = JSON.parse(event.body);

    try {
      const result = await this.saveWebhook({
        data: params.data,
      });

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
