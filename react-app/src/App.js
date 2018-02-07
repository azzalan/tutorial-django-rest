import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import CustomMaterialUI from 'local_modules/custom-material-ui/_CustomMaterialUI'

import Elemento from 'components/Elemento'
import Elementos from 'components/Elementos'
import MeuForm from 'components/MeuForm'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.display = this.getDisplay('Elementos')
  }

  getDisplay = (nomeDoComponent) => {
    switch (nomeDoComponent) {
    case 'Elemento':
      return <Elemento />
    case 'Elementos':
      return <Elementos />
    case 'MeuForm':
      return <MeuForm />
    default:
      return null
    }
  }

  render () {
    const style = {
      padding: '20px 20px 20px 20px',
      width: 900
    }
    return (
      <CustomMaterialUI>
        <div align='center'>
          <div align='left' style={style}>
            {this.display}
          </div>
        </div>
      </CustomMaterialUI>
    )
  }
}
