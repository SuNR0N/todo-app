import {
  Component,
  Input,
} from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-list',
  template: `
    <ul class="list">
      <app-list-item
        *ngFor="let item of items; let i = index;"
        [item]="item"
        id="list-item-{{i}}"
      ></app-list-item>
    </ul>
  `,
  styles: [
    `.list {
      list-style: none;
      padding-left: 1rem;
    }`,
  ],
})
export class ListComponent {
  @Input() items: Item[];
}