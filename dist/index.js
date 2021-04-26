"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const model_1 = require("./model");
const webhooks_1 = require("./controller/webhooks");
const webhooksController = new webhooks_1.WebhooksController(model_1.hooks);
const handler = async (event) => {
    return webhooksController.saveHook(event);
};
exports.handler = handler;
