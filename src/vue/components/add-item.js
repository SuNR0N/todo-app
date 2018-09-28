Vue.component('app-add-item', {
  props: [
    'buttonText',
    'placeholder',
  ],
  template: `
    <div class="input-group add-item col-6 p-0">
      <input
        aria-describedby="addButton"
        class="form-control"
        type="text"
        :aria-label="placeholder"
        :placeholder="placeholder"
        v-model="value"
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary"
          id="addButton"
          type="button"
          @click="handleClick"
        >{{ buttonText }}</button>
      </div>
    </div>
  `,
  data: function () {
    return {
      value: '',
    };
  },
  methods: {
    handleClick: function () {
      this.$emit('add-item', this.value);
      this.value = '';
    },
  },
});