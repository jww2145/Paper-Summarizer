import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <ul className='navbar'>
       <li className='navbar-link'><Link to="/">Home</Link></li> 
      <li className='navbar-link'><Link to="/about">About</Link></li>  
      <li className='navbar-link'><Link to="/Url">Url</Link></li>  
      <li className='navbar-link'><Link to="/Copy">Copy</Link></li>  
      <li className='navbar-link'><Link to="/Named">Named</Link></li>  
    </ul>
  )
}

export default Navbar