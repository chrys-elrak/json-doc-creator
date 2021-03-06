import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {EditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MessagesModule} from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {ScrollTopModule} from 'primeng/scrolltop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, HttpClientModule, BrowserAnimationsModule,
    EditorModule, InputTextModule, ListboxModule, DropdownModule, CalendarModule,
    InputTextareaModule, InputNumberModule, ButtonModule, SplitButtonModule,
    MessagesModule, InputSwitchModule, MessageModule, ToastModule, PanelModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
