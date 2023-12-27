import React,{useEffect, useState} from 'react'
import { List } from 'semantic-ui-react'
import ToDoService from '../services/TodoService'

export default function Todos() {
    const[todos,setTodos]=useState([])
    useEffect(()=>{
        let todoService = new ToDoService()
        todoService.getTodos().then(result=>setTodos(result.data))
    })
  return (
    <div>
    <List>
    {
        todos.map(todo=>(
            <List.Item>{todo.name}{todo.username}</List.Item>
            
        ))
    }
      </List></div>
  )
}
