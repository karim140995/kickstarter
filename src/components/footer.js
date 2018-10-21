import React, {Component} from 'react' ;

class Footer extends Component {
  render(){
    return(
      <div>

          <footer class="site-footer">
              <div class="footer-widgets">
                  <div class="container">
                      <div class="row">
                          <div class="col-12 col-md-6 col-lg-3">
                              <div class="foot-about">
                                  <h2><a class="foot-logo" href="#"><img src="images/foot-logo.png" alt="" /></a></h2>

                                  <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolo.</p>

                                  <ul class="d-flex flex-wrap align-items-center">
                                      <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                      <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                  </ul>
                              </div>
                          </div>

                          <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                              <h2>Useful Links</h2>

                              <ul>
                                  <li><a href="#">Privacy Polticy</a></li>
                                  <li><a href="#">Become  a Volunteer</a></li>
                                  <li><a href="#">Donate</a></li>
                                  <li><a href="#">Testimonials</a></li>
                                  <li><a href="#">Causes</a></li>
                                  <li><a href="#">Portfolio</a></li>
                                  <li><a href="#">News</a></li>
                              </ul>
                          </div>

                          <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                              <div class="foot-latest-news">
                                  <h2>Latest News</h2>

                                  <ul>
                                      <li>
                                          <h3><a href="#">A new cause to help</a></h3>
                                          <div class="posted-date">MArch 12, 2018</div>
                                      </li>

                                      <li>
                                          <h3><a href="#">We love to help people</a></h3>
                                          <div class="posted-date">MArch 12, 2018</div>
                                      </li>

                                      <li>
                                          <h3><a href="#">The new ideas for helping</a></h3>
                                          <div class="posted-date">MArch 12, 2018</div>
                                      </li>
                                  </ul>
                              </div>
                          </div>

                          <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                              <div class="foot-contact">
                                  <h2>Contact</h2>

                                  <ul>
                                      <li><i class="fa fa-phone"></i><span>+45 677 8993000 223</span></li>
                                      <li><i class="fa fa-envelope"></i><span>office@template.com</span></li>
                                      <li><i class="fa fa-map-marker"></i><span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span></li>
                                  </ul>
                              </div>

                              <div class="subscribe-form">
                                  <form class="d-flex flex-wrap align-items-center">
                                      <input type="email" placeholder="Your email" />
                                      <input type="submit" value="send" />
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="footer-bar">
                  <div class="container">
                      <div class="row">
                          <div class="col-12">
                              <p class="m-0">
      Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
      </p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>

      </div>
    );
  }
}
export default Footer;
