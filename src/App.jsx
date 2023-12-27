import React from 'react'
import Users from './pages/Users'
import Photos from './pages/Photos'
import Navi from './layouts/Navi'
import './App.css';
import Dashboard from './layouts/Dashboard'
import { Container } from 'semantic-ui-react'



export default function App() {
  return (
    <div className='App'>
      <Navi/>
      <Container className='main'>
        <Dashboard/>
     </Container>
    </div>
  )
}
