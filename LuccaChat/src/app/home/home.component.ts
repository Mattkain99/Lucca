import {Component, OnInit} from '@angular/core';
import {Message} from "./models/message.model";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {LuModal} from "@lucca-front/ng/modal";
import {ILuUser} from "@lucca-front/ng/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: ILuUser[] = [];
  public messages: Message[] = [];
  private lastUserId = 0;

  constructor(private modal: LuModal) {
  }

  ngOnInit(): void {
  }

  publish(message: Message): void {
    this.messages.push(message);
  }

  logout(user: ILuUser): void {
    this.users = this.users.filter(u => u.id !== user.id);
  }

  removeMessage(message: Message): void {
    this.messages = this.messages.filter(m => m !== message);
  }

  openModal(): void {
    const modal = this.modal.open<LoginModalComponent, undefined, ILuUser>(LoginModalComponent);
    modal.onClose.subscribe(user => {
      user.id = this.lastUserId;
      this.users.push(user);
      this.lastUserId++;
    });
  }
  getRecipients(user: ILuUser): ILuUser[] {
    return this.users.filter(u => u.id !== user.id);
  }
}
