import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'

import CustomForm from 'local_modules/custom-form/_CustomForm'

class MeuForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valorDoForm: {
      }
    }
    this.config = {
      accessor: 'meuForm',
      actions: [
        {
          label: 'Enviar',
          color: 'primary',
          raised: true,
          onClick: this.enviar
        }
      ],
      fields: [
        {
          accessor: 'textoUm',
          label: 'Texto Um',
          type: 'text'
        },
        {
          accessor: 'textoDois',
          label: 'Texto Dois',
          type: 'text'
        },
        {
          accessor: 'textoTres',
          label: 'Texto Três',
          type: 'text'
        }
      ]
    }
    this.fetchValorDoForm()
  }

  fetchValorDoForm = () => {
    const url = 'http://127.0.0.1:8000/api/elemento/1/'
    axios.get(url).then(
      (response) => {
        this.setState({ valorDoForm: response.data })
      }
    )
  }

  enviar = () => {
    const url = 'http://127.0.0.1:8000/api/elemento/'
    const data = this.state.valorDoForm
    axios.delete(url, data).then(
      (reponse) => {
        console.log('Elemento criado com sucesso.')
        console.log(reponse)
        this.setState({ valorDoForm: {} })
      }
    ).catch(
      (error) => {
        console.log('Falha na criação do elemento.')
        console.log(error.response)
      }
    )
  }

  render () {
    return (
      <CustomForm
        config={this.config}
        onChange={CustomForm.linkToState(this, 'valorDoForm')}
        values={this.state.valorDoForm}
      />
    )
  }
}

MeuForm.propTypes = {
}

export default MeuForm
