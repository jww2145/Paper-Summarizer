import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div id = "navbar">
      <ul className='navbar'>
        <li className='navbar-link'><Link to="/">Home</Link></li> 
        <li className='navbar-link'><Link to="/Url">Drop a Link</Link></li>  
        <li className='navbar-link'><Link to="/Copy">Copy and Paste</Link></li>  
        <li className='navbar-link'><Link to="/Named">Name Finder</Link></li>  
      </ul>
    </div>
  )
}

export default Navbar