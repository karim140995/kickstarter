import React, {Component} from 'react' ;
import NavBar from './navBar';
class Header extends Component {
  render(){
    return(
      <div>
      <header className="site-header">
            <div className="top-header-bar">
                <div className="container">
                    <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                        <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                            <div className="header-bar-email">
                                MAIL: <a href="#">contact@ourcharity.com</a>
                            </div>

                            <div className="header-bar-text">
                                <p>PHONE: <span>+24 3772 120 091 / +56452 4567</span></p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                            <div className="donate-btn">
                                <a href="#">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div className="site-branding d-flex align-items-center">
                               <a className="d-block" href="index.html" rel="home"><img className="d-block" src="images/logo.png" alt="logo" /></a>
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
