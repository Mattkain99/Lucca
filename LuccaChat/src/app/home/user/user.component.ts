import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {ILuUser} from '@lucca-front/ng/user';
import {Message} from "../models/message.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() public messages: Message[] = [];
  @Input() public user!: ILuUser;
  @Output() public sentMessage = new EventEmitter<Message>();

  public content: string = '';

  constructor() {
  }

  ngOnInit(): void {

  }
  sendMessage():void {
    const message = {
      timestamp: new Date(),
      user: this.user,
      content: this.content
    };
    this.sentMessage.emit(message);
  }
}
