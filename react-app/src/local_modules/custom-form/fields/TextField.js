import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaterialTextField from 'material-ui/TextField'

export default class TextField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.config.defaultValue || ''
    }
  }

  onChange = (event) => {
    let newValue = event.target.value
    let changeTo = this.props.onChange(
      newValue,
      this.state.value,
      [this.props.index],
      this.props.config
    )
    if (this.props.config.onChange) {
      changeTo = this.props.config.onChange(
        newValue,
        this.state.value,
        [this.props.index],
        this.props.config
      )
    }
    if (changeTo !== null) this.setState({ value: changeTo })
  }

  handleKeyPress = (event) => {
    const { onEnter } = this.props.config
    if (event.key === 'Enter') {
      if (onEnter) onEnter()
    }
  }

  render () {
    const value = this.props.value || ''
    return (
      <MaterialTextField
        onChange={this.onChange}
        label={this.props.config.label || ''}
        disabled={this.props.config.disabled || null}
        fullWidth={this.props.config.fullWidth || null}
        multiline={this.props.config.multiLine || false}
        value={this.props.controlled ? value : this.state.value}
        type={this.props.type || this.props.config.textType || 'text'}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}

TextField.propTypes = {
  // Index for the field the the fields array.
  index: PropTypes.number.isRequired,
  // TextField props
  // hintText
  // defaultValue
  // disabled
  // errorStyle
  // errorText
  // floatingLabelText
  // fullWidth
  // multiLine
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  // Types: 'date', 'time', 'datetime-local'
  type: PropTypes.string,
  value: PropTypes.string,
  controlled: PropTypes.bool
}
