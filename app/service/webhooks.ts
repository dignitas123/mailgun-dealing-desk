import { Model } from "mongoose";
import { WebhookSave } from "../model/dto/webhookSave";

export class WebhooksService {
  private webhooks: Model<any>;
  constructor(webhooks: Model<any>) {
    this.webhooks = webhooks;
  }

  /**
   * create webhook data
   * @param params
   */
  protected async createWebhookData(params: WebhookSave): Promise<object> {
    try {
      const result = await this.webhooks.create({
        ip: params.ip,
        event: params.event,
        timestamp: params.timestamp,
        recipient: params.recipient,
        id: params.id
      });

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}
