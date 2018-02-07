import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ConfigArrayToComponent from '../ConfigArrayToComponent'

import Action from './Action'

export default class Actions extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  getAction = (config, index) => {
    return (
      <Action
        key={index}
        index={index}
        config={config}
      />
    )
  }

  render () {
    return (
      <ConfigArrayToComponent
        configArray={this.props.configArray || []}
        getComponent={this.getAction}
      />
    )
  }
}

Actions.propTypes = {
  configArray: PropTypes.array
}
