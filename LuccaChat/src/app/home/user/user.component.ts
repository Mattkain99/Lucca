import {
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {ILuUser, LuDisplayFullname} from '@lucca-front/ng/user';
import {Message} from "../models/message.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() public recipients: ILuUser[] = [];
  @Input() public messages: Message[] = [];
  @Input() public user!: ILuUser;
  @Output() public sentMessage = new EventEmitter<Message>();
  @Output() public logout = new EventEmitter<ILuUser>();
  @Output() public deleteMessage = new EventEmitter<Message>();
  public selectedRecipient?: ILuUser;
  public filteredMessages: Message[] = [];

  public content: string = '';
  public displayFormat = LuDisplayFullname.firstlast;

  constructor() {
  }

  ngOnInit(): void {
    this.filterMessage();
  }

  ngOnChanges(): void {
    if(!this.recipients.find(r => r === this.selectedRecipient)){
      this.selectedRecipient = undefined;
    }
    this.filterMessage();
  }

  sendMessage():void {
    const message = {
      timestamp: new Date(),
      author: this.user,
      content: this.content,
      recipient: this.selectedRecipient
    };
    this.sentMessage.emit(message);
    this.filterMessage();
    this.content = '';
  }

  selectRecipient(recipient?: ILuUser): void {
    this.selectedRecipient = recipient;
    this.filterMessage();
  }

  private filterMessage(): void {
    this.filteredMessages = this.messages.filter(m => (this.selectedRecipient === undefined && m.recipient === undefined)
      || (
        (m.author === this.user || m.recipient === this.user)
        && (m.author === this.selectedRecipient || m.recipient === this.selectedRecipient)
      ));
  }

}
