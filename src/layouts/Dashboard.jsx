/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route,Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
                //Domainde başka bir adres istenirken gelmesin diye yapılır.
                <Route exact path = "/" component = {ProductList}/>
                <Route exact path = "/products" component = {ProductList}/>
                //kullanilan parametre ismi
                <Route path = "/products/:name" component = {ProductDetail}/>
                <Route path = "/cart/" component = {CartDetail}/>
            </Routes>

       
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}