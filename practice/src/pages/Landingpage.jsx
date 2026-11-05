import React from 'react'
import Products from '../components/products'
import Navbar from '../components/navbar'

const Landingpage = ({ search }) => {
  return (
    <>
    <Products search={search} />
    </>

  )
}

export default Landingpage