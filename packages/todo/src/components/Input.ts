import { Component, Renderer, html } from '@plumejs/core';

export class TodoInput {
  value = '';

  constructor(private renderer: Renderer) {}

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.renderer.emitEvent('submit', { todo: formData.get('todo') });
    e.target.reset();
    // onSubmit(e);
  }

  render() {
    return html`
      <form
        onsubmit=${(e: Event) => {
          this.handleSubmit(e);
        }}
      >
        <div className="flex-row">
          <input type="text" name="todo" />
          <button type="submit">Add</button>
        </div>
      </form>
    `;
  }
}
Component({
  selector: 'app-todo-input',
  deps: [Renderer]
})(TodoInput)
