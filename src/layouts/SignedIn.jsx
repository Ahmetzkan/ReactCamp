import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced = "right" 
            src="https://avatars.githubusercontent.com/u/70511583?v=4"/>
        <Dropdown pointing="top right" inline text ="Ahmet">
            <Dropdown.Menu>
                <Dropdown.Item text ="Information" icon="info"/>
                <Dropdown.Item onClick={signOut} text ="Sign Out" icon="sign-out"/>
            </Dropdown.Menu> 
        </Dropdown>
        </Menu.Item>  
    </div>
  )
}
