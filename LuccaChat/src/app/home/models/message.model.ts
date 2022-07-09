import {ILuUser} from "@lucca-front/ng/user";

export interface Message {
  user: ILuUser;
  timestamp: Date;
  content: string;
}
