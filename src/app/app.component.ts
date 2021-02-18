import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Message } from 'primeng/api/message';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  types: any[] = [];
  items: MenuItem[];
  output: any = {};
  data: any;
  message: Message[] = [{
    severity: 'warn',
    summary: 'Warning',
    detail: "Key already exist, this will make update !",
  }];
  private arrays = [];

  constructor(private messageService: MessageService) {
    this.types = [
      { name: 'Datetime', code: 'DT' },
      { name: 'Date', code: 'D' },
      { name: 'String', code: 'S' },
      { name: 'Number', code: 'N' },
      { name: 'HTML', code: 'H' },
      { name: 'Time', code: 'T' },
      { name: 'Boolean', code: 'B' },
      { name: 'Object', code: 'O' },
      { name: 'Array', code: 'A' },
    ].sort((a, b) => a.name > b.name ? 1 : -1);

    this.items = [
      { label: 'Export', icon: 'pi pi-download', command: () => { } },
      { separator: true },
      { label: 'Clear', icon: 'pi pi-times', command: () => { } },
    ];

    this.initData();
  }

  initData() {
    this.data = {
      key: '',
      type: 'H',
      value: ''
    };
  }

  save() {
    const t = { key: this.data['key'], type: this.data['type'] };
    this.arrays.push(t);
    delete this.data['type'];
    this.output = {
      ...this.output, ... { [this.data['key']]: this.data['value'] }
    };
    this.initData();
  }

  showInfo() {
    this.messageService.add({ key: 'bc', severity: 'info', summary: 'Tips!', detail: 'Make key unique to create new.' });
  }

  keyChange(e) {
    this.data['key'] = e;
    if (this.output.hasOwnProperty(e)) {
      const t = this.arrays.find(a => a.key === e);
      if (t) {
        this.data['type'] = t.type;
        this.data['value'] = this.output[e];
      }
    }
  }

  typeChange(e) {
    this.data['type'] = e;
    this.data['value'] = '';
  }

}
