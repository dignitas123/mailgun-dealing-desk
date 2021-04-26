"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksService = void 0;
class WebhooksService {
    constructor(webhooks) {
        this.webhooks = webhooks;
    }
    /**
     * create webhook data
     * @param params
     */
    async createWebhookData(params) {
        try {
            const result = await this.webhooks.create({
                ip: params.ip,
                event: params.event,
                timestamp: params.timestamp,
                recipient: params.recipient,
                id: params.id
            });
            return result;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
}
exports.WebhooksService = WebhooksService;
