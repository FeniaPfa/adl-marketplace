import React from 'react'
import { Products } from '../components/Products'
import { Main } from '../containers/Main'
import { useGetData } from '../hooks/useGetData'

export const Home = () => {

  return (
    <Main>

    <Products />
    </Main>
  )
}
