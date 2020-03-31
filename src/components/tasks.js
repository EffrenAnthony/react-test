import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Task from './task'

class Tasks extends Component {
    render(){
        // requerimos de la propiedad key con el parametro unico y asi no tener problemas de compilación
        return this.props.task.map( task => 
        <Task 
            task={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask}
            checkDone = {this.props.checkDone}/> 
        )}
}

// los propstypes nos ayudan a especificar que tipos de datos son los props que nos estan pasando
Tasks.propTypes = {
    task: PropTypes.array.isRequired
}
export default Tasks;