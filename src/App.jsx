import { useState } from 'react'
import './App.css'
import React from 'react'
import Overview from './components/Overview'
import Transaction from './components/Transaction'
import Table from './components/Table'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-screen h-screen bg-white-50 '>
      <Sidebar />
      <div className="border-b border-black-150 sm:pl-64 bg-white-500">
        <Topbar />
      </div>
      <div className='m-5 mb-0 sm:ml-64 grid gap-8'>
        <Overview />
        <div className='grid gap-7'>
          <Transaction />
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
