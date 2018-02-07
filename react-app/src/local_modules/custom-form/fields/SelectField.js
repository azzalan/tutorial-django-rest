import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'material-ui/Select'

export default class SelectField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.config.defaultValue || ''
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
    if (changeTo) this.setState({ value: changeTo })
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
    const options = this.props.config.options.map((option, index) => {
      return (
        <option key={index} value={option.value}>{option.content}</option>
      )
    })
    return (
      <Select
        native
        value={this.state.value}
        onChange={this.onChange}
      >
        {options}
      </Select>
    )
  }
}

SelectField.propTypes = {
  // Index for the field the the fields array.
  index: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
