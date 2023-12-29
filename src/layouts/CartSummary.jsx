/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown,Label } from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import { cartItem } from '../store/initialValues/cartItems'

export default function CartSummary() {
const {cartItems} = useSelector(state =>  state.cart) //Sepeti taşıma işlemi

  return (
    <div>
            <Dropdown item text='Your Cart'>
              <Dropdown.Menu>
                {
                  cartItems.map((carItem)=>(
                  <Dropdown.Item key={cartItem.product.id}>
                      {carItem.product.productName}
                      <Label>
                        {carItem.quantity}  
                      </Label>
                  </Dropdown.Item>

                  ))
                }
              <Dropdown.Divider/>
              //React Routerdaki nav link gibi çaliş demek
              //Bir yerden bir yere yönlendirme amaciyla yapilir
              <Dropdown.Item as={NavLink} to ="/cart">Go to cart</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
