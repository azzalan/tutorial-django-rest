import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Actions from './actions/_Actions'
import Fields from './fields/_Fields'

// Function to fetch value of a field given the form's whole value object,
// the index that locates the fields inside the form (has an array format:
// [1,2,3]), and the config of the form.
export const getIndexedField = (value, index, config) => {
  let fieldValue = value
  let fieldConfig = config
  index.forEach((index) => {
    fieldValue = fieldValue[fieldConfig.fields[index].accessor]
    fieldConfig = fieldConfig.fields[index]
  })
  return fieldValue
}

export default class CustomForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: {}
    }
  }

  static linkToState (reactElement, stateName) {
    return (value, old, index, config) => {
      const updatedState = {}
      updatedState[stateName] = value
      reactElement.setState(updatedState)
      return value
    }
  }

  // Function that is called by this component's childs when
  // they are attempting to change their value.
  // It calls the onChange prop to decide if the value should really be
  // changed. If the onChange prop returns something, change the value state to
  // that, and return the value of the field that was changed based on that
  // response so that the child components can also update their value states.
  onChange = (fieldNewValue, fieldOldValue, fieldIndex, fieldConfig) => {
    const currentValue = this.props.values || this.state.value
    const newValue = JSON.parse(JSON.stringify(currentValue))
    const index = JSON.parse(JSON.stringify(fieldIndex))

    newValue[fieldConfig.accessor] = fieldNewValue

    if (this.props.index) index.unshift(this.props.index)

    const changeValueTo = this.props.onChange(newValue, this.state.value, index, this.props.config)

    if (changeValueTo) {
      this.setState({value: changeValueTo})
      const fieldsConfig = this.props.config.fields
      const changedFieldConfig = fieldsConfig[fieldIndex[0]]
      return changeValueTo[changedFieldConfig.accessor]
    }
  }

  render () {
    return (
      <div>
        <Fields
          configArray={this.props.config.fields}
          onChange={this.onChange}
          values={this.props.values || {}}
          controlled={!!this.props.controlled || !!this.props.values}
        />
        <div className='flex center' >
          <Actions configArray={this.props.config.actions} />
        </div>
      </div>
    )
  }
}

CustomForm.propTypes = {
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  index: PropTypes.number,
  values: PropTypes.object,
  controlled: PropTypes.bool
}
