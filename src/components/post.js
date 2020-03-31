import React, { Component } from 'react'

export default class post extends Component {


    state = {
        post: []
    }
    // ESTOS METODOS PERMITEN INTERACTUAR CON REACT PARA SABER SI YA FUE LLAMADO EL ELEMENTO O 
    // SI YA CARGO O SI FUE ELIMINADO O SI YA LLAMARON SUS PROPIEDADES
    // Este elementpo indica que t afue montado un elemneto

    // Con async await hago que el elemento una vez terminado de cargar los datos vea la respuesta
    async componentDidMount(){
        // permite hacer petición a un elemento
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        console.log(data);
        
        this.setState({post: data})     

    }

    render() {
        return (
            <div>
                <h1>Coments</h1>
                {
                    this.state.post.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
