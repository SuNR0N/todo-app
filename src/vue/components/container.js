Vue.component('app-container', {
  template: `
    <main class="container-fluid">
      <h1>{{ title }}</h1>
      <app-info :items="items"></app-info>
      <app-list :items="items"></app-list>
      <app-add-item
        button-text="Add"
        placeholder="Item name"
        @add-item="handleAddItem">
      </app-add-item>
    </main>
  `,
  data: function () {
    return {
      title: 'Vue.js To-Do App',
      items: [
        { label: 'Foo', done: false },
        { label: 'Bar', done: true },
      ],
    };
  },
  methods: {
    handleAddItem: function (label) {
      const exists = this.items.findIndex((item) => item.label === label) !== -1;
      if (!exists) {
        this.items.push({
          label,
          done: false,
        });
      }
    },
  },
});