import React,{Component} from 'react';

export default class ProgressBar extends Component {

  render(){
    return(
      <div>
      <div className="fund-raised w-90">
                              <div className="featured-fund-raised-bar barfiller">
                                      <div className="tipWrap" style={{display: 'inline' }}>
                                          <span className="tip" style={{left: '341.46px', transition: 'left 1.5s ease-in-out 0s'}}>83%</span>
                                      </div>

                                      <span className="fill" data-percentage="83" style={{background: 'rgb(255, 90, 0)', width: '383.46px', transition: 'width 1.5s ease-in-out 0s'}} ></span>
                                  </div>

                                  <div className="fund-raised-details d-flex flex-wrap justify-content-between align-items-center">
                                      <div className="fund-raised-total mt-4">
                                          Raised: ${this.props.currentValue}
                                      </div>

                                      <div className="fund-raised-goal mt-4">
                                          Goal: ${this.props.max}
                                      </div>
                                  </div>
                              </div>
      </div>
    );
  }
}
