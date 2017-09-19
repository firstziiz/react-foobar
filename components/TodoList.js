import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Todo from '../components/Todo'
import AddTodo from '../components/AddTodo'

export const TodoList = props => (
  <div className="container">
    <h1>Todolist</h1>
    <AddTodo />
    <ul className="list-group">
      {
        props.todos.map((data, key) => {
          return <Todo 
            key={key}
            id={key}
            text={data.text}
            done={data.done}
          />
        })
      }
    </ul>
  </div>
)

const mapStateToProps = ({ todos: { todos }}) => ({ todos })

export default compose(
  connect(mapStateToProps, null)
)(TodoList)