import React from 'react'
import AdminLogin from './AdminLogin'

export default function Admin({setIsUserAuth}) {
  return (
    <>
    <AdminLogin setIsUserAuth={setIsUserAuth} />
    </>
  )
}
