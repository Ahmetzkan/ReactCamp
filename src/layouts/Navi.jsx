import React,{useState} from 'react' //Hook tanımlama
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()

  function handleSignOut() {
    setIsAuthenticated(false)
    Navigate("/")
  }

  function handleSignIn() { 
    setIsAuthenticated(true)
  }
  return (
      <div>
      <Menu inverted fixed='top'>
      <Container>
                    <Menu.Item as={NavLink} to="/"
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {
                            isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} />
                        }
                    </Menu.Menu>
       </Container>
      </Menu>
    </div>
  )
}


