import { Component } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'my-app',
  template: `
    <main class="container-fluid">
      <h1>{{ title }}</h1>
      <app-info [items]="items"></app-info>
      <app-list [items]="items"></app-list>
      <app-add-item
        buttonText="Add"
        placeholder="Item name"
        (addItem)="handleAddItem($event)"
      ></app-add-item>
    </main>
  `
})
export class ContainerComponent {
  items: Item[] = [
    { label: 'Foo', done: false },
    { label: 'Bar', done: true },
  ];
  title = 'Angular To-Do App';

  handleAddItem(label: string) {
    const exists = this.items.find((item) => item.label === label);
    if (!exists) {
      const newItem = {
        label,
        done: false,
      };
      this.items.push(newItem);
    }
  }
}