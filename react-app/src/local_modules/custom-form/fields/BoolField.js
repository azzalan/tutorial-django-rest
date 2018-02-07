import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from 'material-ui/Switch'
import Checkbox from 'material-ui/Checkbox'

export default class BoolField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.config.defaultValue | false
    }
  }

  onChange = (event, checked) => {
    let changeTo = this.props.onChange(
      checked,
      this.state.value,
      [this.props.index],
      this.props.config
    )
    if (this.props.config.onChange) {
      changeTo = this.props.config.onChange(
        checked,
        this.state.value,
        [this.props.index],
        this.props.config
      )
    }
    if (changeTo !== null) this.setState({ value: checked })
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
    const checkbox = (
      <Checkbox
        onChange={this.onChange}
        checked={this.state.value}
      />
    )
    const toggle = (
      <div>
        {this.props.config.label}
        <Switch
          onChange={this.onChange}
          checked={!!this.state.value}
        />
      </div>
    )
    return this.props.config.checkbox ? checkbox : toggle
  }
}

BoolField.propTypes = {
  // Index for the field the the fields array.
  index: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

// Config guide
// {
//   // Input with true or false value.
//   type: 'bool',
//   accessor: 'boolFieldAccessor'
//  // The default input for BoolField is Switch, but if 'checkbox' is true
//  // the input is changed to Checkbox;
// }
