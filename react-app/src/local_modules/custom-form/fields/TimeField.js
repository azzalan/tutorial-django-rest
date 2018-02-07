import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from './TextField'

export default class TimeField extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  // Pode chamar setState: Use o constructor nesse caso que é melhor.
  componentWillMount = () => {}

  // Pode chamar setState: Sim.
  componentDidMount = () => {}

  // Pode chamar setState: Sim.
  componentWillReceiveProps = (nextProps) => {}

  // Pode chamar setState: Não.
  // shouldComponentUpdate = (nextProps, nextState) => true

  // Pode chamar setState: Não.
  componentWillUpdate = (nextProps, nextState) => {}

  // Pode chamar setState: Sim.
  componentDidUpdate = (prevProps, prevState) => {}

  //
  componentWillUnmount = () => {}

  render () {
    return (
      <TextField
        type='time'
        index={this.props.index}
        config={this.props.config}
        onChange={this.props.onChange}
      />
    )
  }
}

TimeField.propTypes = {
  // Index for the field the the fields array.
  index: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
