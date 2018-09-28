Vue.component('app-info', {
  props: ['items'],
  template: `
    <span class="info">{{ completedItems }} out of {{ totalItems }} items are completed</span>
  `,
  computed: {
    totalItems: function () {
      return this.items.length;
    },
    completedItems: function () {
      return this.items.reduce((sum, current) => {
        if (current.done) {
          sum += 1;
        }
        return sum;
      }, 0);
    },
  },
});