import {useEffect} from 'react'
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
    null
  )
}

export default Fourohfour