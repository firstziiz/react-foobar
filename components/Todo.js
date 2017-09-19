import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleDone } from '../ducks/todos'

const Todo = props => (
  <li className="list-group-item">
    <input
      type="checkbox"
      value=""
      checked={props.done}
      onChange={() => props.toggleDone(props.id)}
    />
    <span>{` ${props.id + 1}.) ${props.text}: ${props.done}`}</span>
  </li>
)

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDone: bindActionCreators(toggleDone, dispatch)
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(Todo)