import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from '../ducks/todos'

const AddTodo = props => (
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Add todo</label>
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        className="form-control"
        aria-describedby="todoHelp"
        placeholder="Enter todo"
        value={props.text}
        onChange={e => props.handleField('text', e.target.value)}
      />
    </form>
    <small id="todoHelp" className="form-text text-muted">We'll never share your todo with anyone else.</small>
  </div>
)

class AddTodoContainer extends React.Component {
  state = {
    text: '',
  }

  handleField = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  addTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return <AddTodo
      text={this.state.text}
      handleField={this.handleField}
      addTodo={this.addTodo}
    />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch)
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(AddTodoContainer)