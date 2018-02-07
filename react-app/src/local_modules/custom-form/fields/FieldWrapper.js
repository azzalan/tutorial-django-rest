import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FieldWrapper extends Component {
  render () {
    return (
      <div className='pad10' >
        {this.props.children}
      </div>
    )
  }
}

FieldWrapper.propTypes = {
  children: PropTypes.element.isRequired
}
