import React, { useEffect,useState } from 'react'
import { List } from 'semantic-ui-react'
import UserService from '../services/userService'

export default function Users() {
    const[users,setUsers] = useState([])
    useEffect(()=>{
        let userService = new UserService()
        userService.getUserService().then(result=>setUsers(result.data))
    })
  return (
    <div>
          <List>
    {
        users.map(users=>(
            <List.Item>{users.name}&nbsp;{users.username}</List.Item>
            
        ))
    }
      </List></div>
    
  )
}
