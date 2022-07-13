import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">Article Container</Link>
        <Link to="/ner">Named Entity Recognizer</Link>
        
    </div>
  )
}

export default Navbar