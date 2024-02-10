import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}
