import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'

import Popover from 'material-ui/Popover'

import OutsideAlerter from 'assets/OutsideAlerter'

class ComponentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      anchorEl: null
    }
  }

  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.base)
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <span>
        <span
          ref={node => { this.base = node }}
          onClick={this.handleClickButton}
        >
          {this.props.base}
        </span>
        <OutsideAlerter onClickOutside={this.handleClose}>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorReference='anchorEl'
            anchorPosition={{ top: 0, left: 0 }}
            onClose={() => console.log('close')}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            {this.props.menu}
          </Popover>
        </OutsideAlerter>
      </span>
    )
  }
}

ComponentName.propTypes = {
  base: PropTypes.element.isRequired,
  menu: PropTypes.element.isRequired
}

export default ComponentName
