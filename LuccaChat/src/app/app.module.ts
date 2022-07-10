import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './home/user/user.component';
import { LoginModalComponent } from './home/login-modal/login-modal.component';
import { MessageItemComponent } from './home/user/message-item/message-item.component';
import {LuUserTileModule} from '@lucca-front/ng/user';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {LuModalModule} from "@lucca-front/ng/modal";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginModalComponent,
    MessageItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LuUserTileModule,
        FormsModule,
        LuModalModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
