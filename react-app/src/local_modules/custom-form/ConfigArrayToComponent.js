import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ConfigArrayToComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      components: this.getComponents(this.props.configArray)
    }
  }

  getComponents = (configArray) => {
    const checkConfig = this.checkConfig(configArray)
    if (checkConfig === false) return null
    return configArray.map(this.props.getComponent)
  }

  checkConfig = (configArray) => {
    if (this.props.checkConfig) return this.props.checkConfig(configArray)
  }

  // Pode chamar setState: Use o constructor nesse caso que é melhor.
  componentWillMount = () => {}

  // Pode chamar setState: Sim.
  componentDidMount = () => {}

  // Pode chamar setState: Sim.
  componentWillReceiveProps = (nextProps) => {
    const configArray = JSON.stringify(this.configArray)
    const nextConfigArray = JSON.stringify(nextProps.configArray)
    if (configArray !== nextConfigArray) {
      this.setState({components: this.getComponents(nextProps.configArray)})
    }
  }

  // Pode chamar setState: Não.
  // shouldComponentUpdate = (nextProps, nextState) => {}

  // Pode chamar setState: Não.
  componentWillUpdate = (nextProps, nextState) => {}

  // Pode chamar setState: Sim.
  componentDidUpdate = (prevProps, prevState) => {}

  //
  componentWillUnmount = () => {}

  render () {
    return (
      <div>
        {this.state.components}
      </div>
    )
  }
}

ConfigArrayToComponent.propTypes = {
  configArray: PropTypes.array.isRequired,
  getComponent: PropTypes.func.isRequired,
  checkConfig: PropTypes.func
}
