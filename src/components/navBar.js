import React, {Component} from 'react' ;
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div>
          <nav className="site-navigation d-flex justify-content-end align-items-center">
              <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <li className="current-menu-item"><a eventKey={1} componentClass={Link} href="/" to="/">Home</a></li>
                  <li><a href="/">About us</a></li>
                  
              </ul>
          </nav>
      </div>
    );
  }
}

export default NavBar;
