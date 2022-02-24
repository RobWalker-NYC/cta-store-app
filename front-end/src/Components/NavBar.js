import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div>  
        <nav className='navBar'>
          <div id='title'>Buzz House Bakery: &nbsp; Doughnuts. &nbsp; Caffeinated.<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- We're not your parents bakery, or your kids! ...</div><br />
          <nav></nav>
          <h1>
            <Link id='navApp' to='/donuts'>Doughnut List</Link>
          </h1><br />
    
          <br /><Link id='navDo' to='/donuts/new'><button>Add Items</button></Link><br /><br /><br /><br />

          <div id='navFoot'>* Our Doughnuts are made Single Jolt or Double Jolt<br />&nbsp;&nbsp;&nbsp;&nbsp;Single Jolt = 90 mg of Caffeine (or about one 8 oz cup of coffee)<br />&nbsp;&nbsp;&nbsp;&nbsp;Double Jolt = 180 mg of Caffeine (or about one 16 oz cup of coffee)</div><br />
          <div id='navMidFt'>* * PLEASE CAFFEINATE RESPONSIBLY </div>
        </nav>
      </div>  
    );
}

export default NavBar;