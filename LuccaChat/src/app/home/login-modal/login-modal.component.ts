import {Component} from '@angular/core';
import {ILuModalContent} from "@lucca-front/ng/modal";
import {ILuUser} from "@lucca-front/ng/user";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements ILuModalContent {

  public title: string = 'Welcome ! Please login';
  public submitLabel: string = 'Submit';

  public newUser: ILuUser = {
    id: 0,
    firstName: '',
    lastName: ''
  };

  public submitDisabled = this.newUser.firstName === '' || this.newUser.lastName === '';

  constructor() { }

  change(): void {
    this.submitDisabled = this.newUser.firstName === '' || this.newUser.lastName === '';
    console.log(this.submitDisabled);
  }

  submitAction(): ILuUser {
    return this.newUser;
  }
}
