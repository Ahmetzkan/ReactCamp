import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify'

export default function ProductList() {
  const dispatch = useDispatch() //Bu hook'u kullanarak bir bileşen içinde Redux store'a aksiyon gönderilir
  const [products, setProducts] = useState([]);//başarılı olursa her result için bütün datanın içindeki datayı getir

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data))
  }, [])//sondaki ,[] koyulmazsa çalışır ama network sürekli istekte bulunur


  const handleAddtoCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.productName} added to cart`)
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Unit in Stock</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>

            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products.map((product) => (
              <Table.Row key={product.productId}>
                <Table.Cell><Link to={`/products/${product.productId}`}>{product.productName}</Link></Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>

                <Table.Cell><Button onClick={() => handleAddtoCart(product)}>Add to Cart</Button></Table.Cell>
              </Table.Row>
            ))
          }


        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}