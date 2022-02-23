import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div>  
        <nav className='NavBar'>
          <h1>
            <Link id='navApp' to='/donuts'>Donuts</Link>
          </h1>
          <button>
             <Link id='navDo' to='/donut/new'>New Donut</Link> 
          </button>
        </nav>
      </div>  
    );
}

export default NavBar;