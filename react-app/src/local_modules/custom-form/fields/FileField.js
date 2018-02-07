import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Input from 'material-ui/Input'

export default class FileField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.config.defaultValue || null
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
      <Input type='file' onChange={this.onChange} />
    )
  }
}

FileField.propTypes = {
  // Index for the field the the fields array.
  index: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
