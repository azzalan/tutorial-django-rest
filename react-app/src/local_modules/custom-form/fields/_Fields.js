import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ConfigArrayToComponent from '../ConfigArrayToComponent'

import CustomForm from '../_CustomForm'
import FieldWrapper from './FieldWrapper'
import BoolField from './BoolField'
import SelectField from './SelectField'
import DateField from './DateField'
import DateTimeField from './DateTimeField'
import FileField from './FileField'
import TextField from './TextField'
import TimeField from './TimeField'

export default class Fields extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  // Check if all fields have accessor.
  // Also check if there are any repeated accessor in the fields array,
  // if there are, log an error.
  checkConfig = (fieldsConfigArray) => {
    if (!fieldsConfigArray) {
      return console.error(new Error('No fields on your config.'))
    }
    fieldsConfigArray.forEach((fieldConfig, index) => {
      if (!fieldConfig.accessor) {
        console.error(new Error('Error found! Details below.'))
        console.error('All fields must have accessors. Field index: ' + index)
        console.error('Field: ')
        console.error(fieldConfig)
      }
      fieldsConfigArray.forEach((fieldConfig2, index2) => {
        if (index2 !== index && fieldConfig.accessor === fieldConfig2.accessor) {
          console.error(new Error('Error found! Details below.'))
          console.error('Two fields cant have the same accessor. Fields: ')
          console.error(this.props.configArray)
        }
      })
    })
  }

  getField = (fieldConfig, index) => {
    const value = this.props.values[fieldConfig.accessor] || null
    const controlled = this.props.controlled
    switch (fieldConfig.type) {
    case 'date':
      return (
        <div key={index} >
          <DateField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </div>
      )
    case 'dateTime':
      return (
        <div key={index} >
          <DateTimeField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </div>
      )
    case 'file':
      return (
        <div key={index} >
          <FileField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </div>
      )
    case 'select':
      return (
        <div key={index} >
          <SelectField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </div>
      )
    case 'text':
      return (
        <FieldWrapper key={index} >
          <TextField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </FieldWrapper>
      )
    case 'time':
      return (
        <div key={index} >
          <TimeField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </div>
      )
    case 'bool':
      return (
        <div key={index} >
          <BoolField
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            value={value}
            controlled={controlled}
          />
        </div>
      )
    case 'object':
      return (
        <div key={index} >
          <CustomForm
            index={index}
            config={fieldConfig}
            onChange={this.props.onChange}
            values={value || {}}
            controlled={controlled}
          />
        </div>
      )
    default:
      console.error(new Error('Error found! Details below.'))
      console.error('No valid type was specified for field: ')
      console.error(fieldConfig)
    }
  }

  render () {
    return (
      <div>
        <ConfigArrayToComponent
          configArray={this.props.configArray}
          getComponent={this.getField}
          checkConfig={this.checkConfig}
        />
      </div>
    )
  }
}

Fields.propTypes = {
  configArray: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object,
  controlled: PropTypes.bool
}
