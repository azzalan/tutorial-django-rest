import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Elemento from './Elemento'

class Elementos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arrayValores: []
    }
  }

  render () {
    let elementos = this.state.arrayValores.map((valorElemento, index) => {
      return <Elemento valorElemento={valorElemento} key={index} />
    })
    if (elementos.length < 1) elementos = 'Nenhum elemento encontrado.'
    return (
      <div>
        {elementos}
      </div>
    )
  }
}

Elementos.propTypes = {
}

export default Elementos
