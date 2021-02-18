import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  htmlContent = '';
  types = [];
  selectedType = 'S';
  items: MenuItem[];

  constructor() {
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
      {
        label: 'Save', icon: 'pi pi-save', command: () => {

        }
      },
      { separator: true },
      {
        label: 'Clear', icon: 'pi pi-times', command: () => {

        }
      },
    ];
  }
}
