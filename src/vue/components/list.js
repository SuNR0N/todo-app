Vue.component('app-list', {
  props: ['items'],
  template: `
    <ul class="list">
      <app-list-item
        v-for="(item, index) in items"
        :id="'list-item-' + index"
        :item="item"
        :key="item.label"
      ></app-list-item>
    </ul>
  `,
});