export interface SaveWebhookDTO {
  geolocation: Geolocation;
  tags: string[];
  ip: string;
  "recipient-domain": string;
  event: string;
  campaigns: any[];
  userVariables: UserVariables;
  logLevel: string;
  timestamp: number;
  clientInfo: ClientInfo;
  message: Message;
  recipient: string;
  id: string;
}

export interface ClientInfo {
  clientOS: string;
  deviceType: string;
  clientName: string;
  clientType: string;
  userAgent: string;
}

export interface Geolocation {
  country: string;
  region: string;
  city: string;
}

export interface Message {
  headers: Headers;
}

export interface Headers {
  messageID: string;
}

export interface UserVariables {
  myVar1: string;
  myVar2: string;
}
