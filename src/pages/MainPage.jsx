import React from 'react'
import NavBar from '../components/NavBar'

export default function MainPage() {
  return (
    <div className='h-screen flex flex-col'>
        <NavBar/>
        <img src="/soccer_field.jpg" alt="img" className='flex-1 object-cover w-full'/>
    </div>
  )
}
