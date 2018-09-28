import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-item',
  template: `
    <div class="input-group add-item col-6 p-0">
      <input
        #newItemInput
        aria-describedby="addButton"
        class="form-control"
        type="text"
        [attr.aria-label]="placeholder"
        [placeholder]="placeholder"
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary"
          id="addButton"
          type="button"
          (click)="handleClick(newItemInput)"
        >{{ buttonText }}</button>
      </div>
    </div>
  `,
})
export class AddItemComponent {
  @Input() buttonText: string;
  @Input() placeholder: string;
  @Output() addItem = new EventEmitter<string>();

  handleClick(input: HTMLInputElement) {
    this.addItem.emit(input.value);
    input.value = '';
  }
}