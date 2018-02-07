import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Elemento from './Elemento'
import axios from 'axios'

class Elementos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arrayValores: []
    }
    this.fetchArrayValores()
  }

  fetchArrayValores = () => {
    const url = 'http://127.0.0.1:8000/api/elemento/'
    const params = { id: '1' }
    const config = { params }
    axios.get(url, config).then(
      (response) => {
        this.setState({ arrayValores: response.data })
      }
    )
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
