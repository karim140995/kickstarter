import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div>
        <div className="swiper-container hero-slider">
        <div className="swiper-wrapper">
            <div className="swiper-slide hero-content-wrap">
                <img src="images/startup.jpeg" alt="" />

                <div className="hero-content-overlay position-absolute w-100 h-100">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                <header className="entry-header">
                                    <h1>Donate</h1>
                                    <h4>4 a better world</h4>
                                </header>

                                <div className="entry-content mt-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                </div>

                                <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                    <a href="#" className="btn gradient-bg mr-2">Donate Now</a>
                                    <a href="#" className="btn orange-border">Read More</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
            <div className="home-page-icon-boxes">
             <div className="container">
                 <div className="row">
                     <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                         <div className="icon-box active">
                             <figure className="d-flex justify-content-center">
                                 <img src="images/hands-gray.png" alt="" />
                                 <img src="images/hands-white.png" alt="" />
                             </figure>

                             <header className="entry-header">
                                 <h3 className="entry-title">Become a Volunteer</h3>
                             </header>

                             <div className="entry-content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                             </div>
                         </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                         <div className="icon-box">
                             <figure className="d-flex justify-content-center">
                                 <img src="images/donation-gray.png" alt="" />
                                 <img src="images/donation-white.png" alt="" />
                             </figure>

                             <header className="entry-header">
                                 <h3 className="entry-title">Sponsor project</h3>
                             </header>

                             <div className="entry-content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                             </div>
                         </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                         <div className="icon-box">
                             <figure className="d-flex justify-content-center">
                                 <img src="images/charity-gray.png" alt=""/>
                                 <img src="images/charity-white.png" alt=""/>
                             </figure>

                                 <h3 className="entry-title">Fundraise project</h3>
                                 <header className="entry-header">
                             </header>

                             <div className="entry-content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      <div className="home-page-events">
       <div className="container">
           <div className="row">
               <div className="col-12 col-sm-6">
                   <div className="upcoming-events">
                       <div className="section-heading">
                           <h2 className="entry-title">Tendences</h2>
                       </div>

                       <div className="event-wrap d-flex flex-wrap justify-content-between">
                           <figure className="m-0">
                               <img src="images/bm3.jpg" alt="" />
                           </figure>
                           <div className="event-content-wrap">
                               <header className="entry-header d-flex flex-wrap align-items-center">
                                   <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>

                                   <div className="posted-date">
                                       <a href="#">Aug 25, 2018 </a>
                                   </div>

                                   <div className="cats-links">
                                       <a href="#">Ball Room New York</a>
                                   </div>
                               </header>

                               <div className="entry-content">
                                   <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                               </div>

                               <div className="entry-footer">
                                   <a href="#">Read More</a>
                               </div>
                           </div>


                       <div className="event-wrap d-flex flex-wrap justify-content-between">
                           <figure className="m-0">
                               <img src="images/bw1.jpg" alt="" />
                           </figure>

                           <div className="event-content-wrap">
                               <header className="entry-header d-flex flex-wrap align-items-center">
                                   <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>

                                   <div className="posted-date">
                                       <a href="#">Aug 25, 2018 </a>
                                   </div>

                                   <div className="cats-links">
                                       <a href="#">Ball Room New York</a>
                                   </div>
                               </header>

                               <div className="entry-content">
                                   <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                               </div>

                               <div className="entry-footer">
                                
                                   <a href="#">Read More</a>
                               </div>
                           </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-12 col-sm-6">
                   <div className="featured-cause">
                       <div className="section-heading">
                           <h2 className="entry-title">Recent idea</h2>
                       </div>

                       <div className="cause-wrap d-flex flex-wrap justify-content-between">
                           <figure className="m-0">
                               <img src="images/bm1.png" alt=""/>
                           </figure>

                           <div className="cause-content-wrap">
                               <header className="entry-header d-flex flex-wrap align-items-center">
                                   <h3 className="entry-title w-100 m-0"><a href="#">John Smith</a></h3>

                                   <div className="posted-date">
                                       <a href="#">Aug 25, 2018 </a>
                                   </div>

                                   <div className="cats-links">
                                       <a href="#">Ball Room New York</a>
                                   </div>
                               </header>

                               <div className="entry-content">
                                   <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
                               </div>

                               <div className="entry-footer mt-5">
                               <Link eventKey={3} componentClass={Link} to="/project" className="btn gradient-bg mr-2" style={{marginBottom : '20px' }}>Read more</Link>

                               </div>
                           </div>

                        
                           </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
    </div>
    );
  }
}
export default Home;
