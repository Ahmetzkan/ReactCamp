/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
            <Dropdown item text='Your Cart'>
              <Dropdown.Menu>
              <Dropdown.Item>Asus Laptop</Dropdown.Item>
              <Dropdown.Item>Dell Laptop</Dropdown.Item>
              <Dropdown.Item>Acer Laptop</Dropdown.Item>
              <Dropdown.Divider/>
              //React Routerdaki nav link gibi çaliş demek
              //Bir yerden bir yere yönlendirme amaciyla yapilir
              <Dropdown.Item as={NavLink} to ="/cart">Go to cart</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
