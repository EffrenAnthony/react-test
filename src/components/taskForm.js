import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        this.props.addTask(this.state.title,this.state.description)
        // console.log(this.state);
        // con esto hacemos que el formulario no refresque la pagina una vez que se hace submit
        event.preventDefault();
        
    }

    onChange = event => {
        // en el evento on Change que cambia el valor, va a esccuchar ese cambio del taget en el que esta y su valor
        // console.log(event.target.value,event.target.name);

        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    render(){

        // this.props.addTask(`title one`,'description one');
        
        return(
            <form onSubmit = {this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a task" 
                    onChange={this.onChange} 
                    value={this.state.title}></input>
                <br></br>
                <br></br>
                <textarea 
                    name="description"
                    placeholder="Write a description" 
                    onChange={this.onChange} 
                    value={this.state.description}></textarea>
                <input type="submit"></input>
            </form>
        )
    }


}

