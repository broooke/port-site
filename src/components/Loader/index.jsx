import React, { useEffect, useState, useRef } from 'react'
import './style.scss'

function Loader() {

    return (
        <>
        <div className='loader-wrapper absolute'>
            <h1 className='outline top'>the minimum is my relegion</h1>
            <h1 className='top'>the minimum is my relegion</h1>
            <h1 className='outline top'>the minimum is my relegion</h1>
            <h1 className='top'>the minimum is my relegion</h1>
            <h2 style={{color: 'gray'}} className='middle'>the minimum is my relegion</h2>
            <h1 className='bottom'>the minimum is my relegion</h1>
            <h1 className='outline bottom'>the minimum is my relegion</h1>
            <h1 className='bottom'>the minimum is my relegion</h1>
            <h1 className='outline bottom'>the minimum is my relegion</h1>
            <div className='banner'></div>
        </div>
        
        </>
    )
}

export default Loader
