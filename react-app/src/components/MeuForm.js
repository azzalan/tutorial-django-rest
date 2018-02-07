import React, { Component } from 'react'
// import PropTypes from 'prop-types'

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
  }

  enviar = () => {
    console.log('enviar')
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
