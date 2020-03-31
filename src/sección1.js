
/* function Helloworld (props){ 
  console.log(props);
  
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.myText}
    </div>
  )
 } */


//  ?se utilzia this ya que es ahora una propiedad y no un parametro ya que estamos en una clase, esto para los props
class Helloworld extends React.Component{

    // ?podemos incluir un estado de la siguiente manera
    state = {
      show: true
    }
  // ?con set state podemos cambiar el estado del elemento
  // ! escribiendo asi la función necesitamos de bind
    // toggleHidden(){
    //   this.setState({show: false})
    // }
  
    // ! escribiendo como función flecha no necesitamos de bind(this)
    // toggleShow = () =>{
    //   this.setState({show: true})
    // }
  
    // ? para cambiar un elemento bool podemos hacer !this.state.elemento
    toggleShow = () =>{
      this.setState({show: !this.state.show})
    }
  
  
     render(){
       if (this.state.show) {
         return(
               <div id="hello">
                 <h3>{this.props.subtitle}</h3>
                 {this.props.myText}
                 {/* el evento onClick es nativo de react */}
                 {/* requerimos del metodo bind para indicar que estamos en la clase actual */}
                 {/* <button onClick={this.toggleHidden.bind(this)}>Esconder</button> */}
                 <button onClick={this.toggleShow}> Esconder </button>
               </div>
             )      
       }else{
         return(
           <div>
           <h1>No hay elementos</h1>
           <button onClick={this.toggleShow}> Mostrar </button>
           </div>
         )
       }
     }
   }
  //  ? se puede escribir asi 
  // const App = () => <div >This is my component: <Helloworld/> <Helloworld/></div>
  
  // ?Como Clase
  // class App extends React.Component{
  //   render(){
  //     return <div >This is my component: <Helloworld/> <Helloworld/></div>
  //   }
  // }
  
  // ? O como nomalmente esta hecho
  function App() {
    return (
      <div className="contenedor">
          This is my component: 
          <Helloworld myText = "Hola mi amor" subtitle="lorem ipsum"/>
          <Helloworld myText = "Te amo con todo mi corazon" subtitle="ladfasd"/>
          <Helloworld myText = "Infinitamente Annabel, para toda la vida ❤" subtitle="asdfe"/>
          <Helloworld myText = "¿Quieres estar conmigo para siempre? 🥰👀" subtitle="lasdfe"/></div>
    );
  }