
import React, { Component } from 'react'
import Todo from './components/Todo/Todo'
import Form from './components/Form/Form'
import "./App.css"
 class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     items:[
  // {id:"",name:"",num:""}
     ]
  }

}


  deleteitems=(id)=>{
    let items=this.state.items
    let i=items.findIndex(item=>item.id===id)
    items.splice(i,1)
    this.setState({
      items:items
    })
  }


  addItems=(item)=>{
  item.id=Math.random()
    let items=this.state.items
  items.push(item)
  this.setState({
    items:items
  })
  
  
  }

  render() {
    console.log(this.state.items)

    return (
      <div className='App'>
        <h1>Add Name&Phone</h1>
        <Todo  items={this.state.items} deleteitems={this.deleteitems} />
        <Form addItems={this.addItems}/>
      </div>
    )
  }
}

export default App
