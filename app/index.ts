import { Handler } from "aws-lambda";
import { hooks } from "./model";
import { WebhooksController } from "./controller/webhooks";

const webhooksController = new WebhooksController(hooks);

export const handler: Handler = async (event: any) => {
  return webhooksController.saveHook(event);
};
