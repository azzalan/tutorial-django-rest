import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import axios from 'axios'

class Elemento extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valorElemento: {}
    }
    this.fetchValorElemento()
  }

  fetchValorElemento = () => {
    const url = 'http://127.0.0.1:8000/api/elemento/1/'
    axios.get(url).then(
      (response) => {
        this.setState({ valorElemento: response.data })
      }
    ).catch(
      (error) => {
        console.log('falha')
        console.log(error)
      }
    )
  }

  render () {
    const styles = {
      paper: {
        padding: '10px 10px 10px 10px',
        margin: '10px 0px 10px 0px'
      },
      field: {
        margin: '10px 0px 10px 0px'
      }
    }
    const valorElemento = this.props.valorElemento || this.state.valorElemento
    return (
      <div>
        <Paper style={styles.paper}>
          <div style={styles.field}>
            <div><b>Texto Um:</b></div>
            <div>{valorElemento.texto_um}</div>
          </div>
          <div style={styles.field}>
            <div><b>Texto Dois:</b></div>
            <div>{valorElemento.texto_dois}</div>
          </div>
          <div style={styles.field}>
            <div><b>Texto Três:</b></div>
            <div>{valorElemento.texto_tres}</div>
          </div>
        </Paper>
      </div>
    )
  }
}

Elemento.propTypes = {
  valorElemento: PropTypes.object
}

export default Elemento
