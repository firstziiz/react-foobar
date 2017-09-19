import React from 'react'
import { initStore } from '../ducks/index'
import withRedux from 'next-redux-wrapper'
import TodoList from '../components/TodoList'

const Index = props => (
  <TodoList {...props} />
)

export default withRedux(initStore, null, null)(Index)