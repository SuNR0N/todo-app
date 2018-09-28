import {
  Component,
  Input,
} from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-list-item',
  template: `
    <li class="list-item form-check">
      <input
        class="form-check-input"
        type="checkbox"
        [id]="id"
        [attr.checked]="item.done === true ? '' : null"
        (change)="handleChange($event)"
      />
      <label
        class="form-check-label"
        [for]="id"
      >{{ item.label }}</label>
    </li>
  `,
  styles: [
    `.input + label {
      text-decoration: none;
    }`,
    `input[checked] + label {
      text-decoration: line-through;
    }`,
  ],
})
export class ListItemComponent {
  @Input() id: string;
  @Input() item: Item;

  handleChange(event) {
    this.item.done = event.target.checked;
  }
}