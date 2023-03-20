import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import './index.css'
import RowPost from '../RowPost/RowPost'
import { urlAction, urlOriginal,urlHorror } from '../Constant/Constant'

function Body() {
  return (
    <div>
      <Header />
      <Banner />
      <RowPost url={urlOriginal} title='Netflix Originals' />
      <RowPost url={urlAction} title='Action' isSmall />
      <RowPost url={urlHorror} title='Horror' isSmall />
    </div>
  )
}

export default Body