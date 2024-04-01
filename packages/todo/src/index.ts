import { Component, html } from '@plumejs/core';
import './components/Input';
import './components/List';

class AppComponent {
  todos: string[] = [];

  render() {
    return html`<app-todo-input
        onsubmit=${(e) => {
          console.log(e.detail.todo);
          this.todos.push(e.detail.todo);
        }}
      ></app-todo-input>
      <app-todo-list data-input=${{ todos: this.todos }}></app-todo-list>`;
  }
}

Component({
  selector: 'app-todo-root',
  root: true
})(AppComponent);
