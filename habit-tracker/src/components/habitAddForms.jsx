import React, { PureComponent } from 'react'

export default class HabitAddForms extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.value = '';
        this.formRef.current.reset();
    };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input 
            ref={this.inputRef}
            type="text"
            className="add-input"
            placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    )
  }
}
