import React, {Component} from 'react';

// importar prop type

import PropTypes from 'prop-types';
// importar archivo css
import './task.css';

class Task extends Component{

    StyleCompleted(){
        return {
            fontSize:'20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        // es mejor de estructurrar los props asi los utilizamos directamente al momento del render
        const {task} = this.props;
        // const borderBlue = {border: 'solid 0px blue'}


        return <p style={this.StyleCompleted()}>
        {task.title} -
        {task.description} - 
        {task.done} - 
        {task.id}
        <input type="checkbox" onChange = {this.props.checkDone.bind(this, task.id)} />
        {/* con bind this podemos pasarle el id donde estamos actualmente */}
        <button style={bntDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
            X
        </button>

        </p>
    }
}

// con propTypes indico que tipo de propiedades van a ser aceptadas

Task.propTypes = {
    task: PropTypes.object.isRequired
}


const bntDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color:'#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    // float: 'right'

}

export default Task;
