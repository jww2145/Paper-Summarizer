import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Fourohfour() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        },
        4000)
    },[])
  return (
    <div>404</div>
  )
}

export default Fourohfour