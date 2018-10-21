import React, {Component} from 'react' ;

class NavBar extends Component {
  render(){
    return(
      <div>
          <nav className="site-navigation d-flex justify-content-end align-items-center">
              <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <li className="current-menu-item"><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="causes.html">Causes</a></li>
                  <li><a href="portfolio.html">Gallery</a></li>
                  <li><a href="news.html">News</a></li>
                  <li><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </div>
    );
  }
}

export default NavBar;
