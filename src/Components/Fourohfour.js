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
    <div>
   <h1>404</h1>
   <h2>Page not found. Redirecting back to Home.</h2>
   </div>
  )
}

export default Fourohfour