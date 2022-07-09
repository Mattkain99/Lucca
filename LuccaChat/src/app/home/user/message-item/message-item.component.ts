import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../models/message.model";
import {ILuUser} from "@lucca-front/ng/user";

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input() currentUser!: ILuUser;
  @Input() message!: Message;
  @Output() deleteMessage = new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  }
}
