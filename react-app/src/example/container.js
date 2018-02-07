import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ContainerName extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
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
      <div />
    )
  }
}

ContainerName.propTypes = {
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerName)
