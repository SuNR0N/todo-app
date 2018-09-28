import {
  Component,
  Input,
} from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-info',
  template: `
    <span>{{ completedItems }} out of {{ totalItems }} items are completed</span>
  `,
  styles: [
    `span {
      font-style: italic;
    }`,
  ],
})
export class InfoComponent {
  @Input() items: Item[];

  get completedItems(): number {
    return this.items.reduce((sum, current) => {
      if (current.done) {
        sum += 1;
      }
      return sum;
    }, 0);
  }

  get totalItems(): number {
    return this.items.length;
  }
}