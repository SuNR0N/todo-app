Vue.component('app-list-item', {
  props: [
    'id',
    'item',
  ],
  template: `
    <li class="list-item form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :id="id"
        :checked="item.done"
        @change="handleChange"
      />
      <label
        class="form-check-label"
        :for="id"
      >{{ item.label }}</label>
    </li>
  `,
  methods: {
    handleChange: function (event) {
      this.item.done = event.target.checked;
      if (this.item.done) {
        event.target.setAttribute('checked', '');
      } else {
        event.target.removeAttribute('checked');
      }
    },
  },
  mounted: function () {
    const input = this.$el.querySelector('input');
    if (this.item.done) {
      input.setAttribute('checked', '');
    }
  },
});