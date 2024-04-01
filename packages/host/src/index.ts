import { Component, html, render } from '@plumejs/core';
import 'remoteTodo/Input';
import 'remoteTodo/List';

class AppComponent {
  todos: string[] = [];

  render() {
    return html`<h1>This is host application</h1><app-todo-input
        onsubmit=${(e) => {
          console.log(e.detail.todo);
          this.todos.push(e.detail.todo);
        }}
      ></app-todo-input>
      <app-todo-list data-input=${{ todos: this.todos }}></app-todo-list>`;
  }
}

Component({
  selector: 'app-root',
  styles: import('./styles/styles.scss'),
  root: true
})(AppComponent);

render(document.getElementById('root'), html`<app-root></app-root>`);
