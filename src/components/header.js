import React, {Component} from 'react' ;
import NavBar from './navBar';
class Header extends Component {
  render(){
    return(
      <div>
      <header className="site-header">
            
            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div className="site-branding d-flex align-items-center">
                               <a className="d-block" href="index.html" rel="home"><img className="d-block" src="assets/logo.png" alt="logo" /></a>
                            </div>

                            <NavBar/>

                            <div className="hamburger-menu d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </header>

      </div>
    );
  }
}
export default Header;
