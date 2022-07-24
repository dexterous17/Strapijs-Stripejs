import React from 'react'
import Header from './Header'
import '../Style/Layout.css'
export default function Layout({ children }) {
    return (
        <div className='content-wrap'>
            <Header/>
            {children}
        </div>
    )
}