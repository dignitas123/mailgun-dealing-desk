import { Model } from "mongoose";
import { SaveWebhookDTO } from "../model/dto/saveWebhookDTO";

export class WebhooksService {
  private webhooks: Model<any>;
  constructor(webhooks: Model<any>) {
    this.webhooks = webhooks;
  }

  /**
   * Create book
   * @param params
   */
  protected async saveWebhook(params: SaveWebhookDTO): Promise<object> {
    try {
      const result = await this.webhooks.create({
        data: params.data,
      });

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}
