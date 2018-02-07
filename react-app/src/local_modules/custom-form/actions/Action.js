import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

export default class Action extends Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  onClick = () => {
    if (this.props.config.disableOnClick) {
      this.setState({ disabled: true })
    }
    if (this.props.config.onClick) this.props.config.onClick()
  }

  render () {
    return (
      <Button
        className='margin10'
        onClick={this.onClick}
        color={this.props.config.color || 'default'}
        disabled={this.state.disabled || this.props.config.disabled}
      >
        {this.props.config.label || ''}
      </Button>
    )
  }
}

Action.propTypes = {
  // Maybe it will be userful in the future, commeting for now.
  // index: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired
}
