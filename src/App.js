import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import task from './example/task.json'

// Components
import Tasks from './components/tasks'
import TaskForm from './components/taskForm'
import Post from './components/post'

console.log(task);

class App extends Component{

  state = {
    task: task
  }

  addTask = (title, description) =>{
    const newTask={

      title:title,
      description: description,
      id: this.state.task.length

    }
    this.setState({
      task: [...this.state.task,newTask]
    })   
    
  }

  deleteTask = (id)=>{
    // filter me permite recorrer un arreglo excluyendo algunos datos
    const newTask = this.state.task.filter(task => task.id !== id)
    this.setState({task:newTask})
    console.log(newTask);
    
  }

  checkDone = (id)=>{
    const newTask = this.state.task.map(task =>{
      if(task.id === id){
        // colocando signo de admiración antes del taskdone hacemos que cambie de true a false
        task.done = !task.done
      }
      return task;
    })
    this.setState({task: newTask})
  }

  render(){
    return <div>
      {/* A traves de Router y Route podemos generar rutas de navegación dentro de react y requiere del Router y DE ROUTE */}
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/post">Post</Link>
        {/* indicando "exact" me lleva a la ruta en la que me encuentro y me muestra unicamente esa*/}
          <Route exact path="/" render={()=>{
            // Route siempre debe retornar algo cuando se usa el metodo render
            return <div>
              {/* los elementos de react native al realizar una consulta como map, requieren de una propiedad key que debe recibir un para metro unico
              en este caso el id */}
              <TaskForm addTask={this.addTask}></TaskForm>
              <Tasks 
                task={this.state.task} 
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
                />
            </div>

          }}>

          </Route>

          {/* CuANDO SE USA EL METODO COMPONENT SE DEBE INDICAR QUE ESTA RETORNANDO */}
          <Route path="/post" component={Post}>
          </Route>
          <Route path="/repost" component={Post}>
          </Route>
      </Router>
      {/* Este componente nos va a permitir crear una ruta */}
        
    </div>
  }

}

export default App;
