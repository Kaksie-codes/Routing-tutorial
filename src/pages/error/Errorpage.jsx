import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='page'>
        <div className='flex'>
            Oops! this page does'nt exist
            <Link to='/'>
            <button>Go to the HomePage</button>
            </Link>
        </div>
    </div>
  )
}

export default Errorpage