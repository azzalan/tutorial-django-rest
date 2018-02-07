import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'

export default class CustomMaterialUI extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  // // Pode chamar setState: Use o constructor nesse caso que é melhor.
  // componentWillMount = () => {}

  // // Pode chamar setState: Sim.
  // componentDidMount = () => {}

  // // Pode chamar setState: Sim.
  // componentWillReceiveProps = (nextProps) => {}

  // // Pode chamar setState: Não.
  // shouldComponentUpdate = (nextProps, nextState) => {}

  // // Pode chamar setState: Não.
  // componentWillUpdate = (nextProps, nextState) => {}

  // // Pode chamar setState: Sim.
  // componentDidUpdate = (prevProps, prevState) => {}

  // //
  // componentWillUnmount = () => {}

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

CustomMaterialUI.propTypes = {
  children: PropTypes.element.isRequired
}
