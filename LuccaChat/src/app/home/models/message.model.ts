import {ILuUser} from "@lucca-front/ng/user";

export interface Message {
  author: ILuUser;
  timestamp: Date;
  content: string;
  recipient?: ILuUser;

}
