import React, {Component} from 'react' ;
import ProgressBar from './progressBar';

const VideoComponent = (props) => {
  return (
    <div>
    <video width="100%" height="400" controls>
<source src="movie.mp4" type="video/mp4" />
<source src="movie.ogg" type="video/ogg" />
</video>
    </div>
  )
}
const Description = (props) => {
  return (
    <div>
    <h2>Project Description</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ipsum lorem, ut molestie lorem euismod eu. Proin eros felis, malesuada ultricies lacus pulvinar, congue viverra augue. Donec ultrices elementum nibh, et iaculis eros. Sed convallis nulla quis eleifend maximus. Proin posuere erat sit amet urna sagittis, ac vestibulum ligula tincidunt. Nulla ac sem quam. Nunc a sagittis est. Suspendisse potenti. Integer lobortis finibus imperdiet. Vivamus ut mauris at dui malesuada efficitur non ac eros. Morbi non tincidunt lacus. Pellentesque semper vulputate nisi, et accumsan mauris lobortis a.
    </p>
<p>
    Vestibulum elementum molestie ante sed molestie. Etiam at mauris sed ipsum porttitor lacinia et at felis. Duis mi massa, rhoncus quis purus eu, dictum sodales ante. Sed et leo accumsan, porta nunc dignissim, ullamcorper dui. Vivamus efficitur tristique ipsum quis accumsan. Fusce vitae luctus nunc. Nulla augue nulla, tristique eget massa a, dignissim viverra risus. Proin a lorem nunc. Proin luctus ac felis non efficitur. Praesent mauris est, fringilla sed condimentum ac, commodo et massa. Mauris posuere metus eu metus varius consequat.
</p>
<p>
    Sed interdum mauris ut tortor convallis consectetur. Aenean eleifend, tortor id iaculis convallis, urna turpis consectetur elit, in pellentesque lacus diam id diam. Suspendisse suscipit ligula in mauris efficitur posuere. Phasellus volutpat pulvinar justo. Donec sit amet iaculis lectus, in maximus tortor. Mauris vel venenatis eros, at mollis arcu. Nam urna diam, commodo id vehicula et, mattis in velit. Mauris volutpat, ipsum eget auctor consequat, felis lorem aliquet quam, in imperdiet turpis orci vitae lorem. Praesent placerat vitae risus ut rutrum. Quisque gravida orci consectetur mi tincidunt semper. Quisque id porttitor dolor, ut mollis elit. Pellentesque vitae consectetur ex, quis hendrerit nisl. Vivamus leo turpis, elementum quis libero et, fermentum commodo nisl. Aenean non libero et lectus sollicitudin dignissim in sagittis arcu. Sed nunc sapien, dapibus in nunc a, tempus mattis elit. Proin luctus sem in cursus ultricies.
</p>
<p>
    Suspendisse ornare nunc eget diam semper mattis. Vivamus at aliquet ligula. Suspendisse ullamcorper, tellus in mollis dapibus, tortor justo viverra massa, non efficitur odio risus eget sem. Phasellus urna neque, vehicula in est sit amet, porta tincidunt lectus. Morbi suscipit, nisi sit amet malesuada ultricies, sem lacus accumsan elit, vitae pulvinar justo augue et lorem. Aliquam hendrerit quis metus id blandit. Maecenas at facilisis urna.

    In maximus nibh semper orci lobortis, vel blandit dui rutrum. Vivamus dictum eros ut urna eleifend dapibus. Ut interdum massa eu justo tempor condimentum. Nulla facilisi. Integer scelerisque rhoncus mi. Aliquam erat volutpat. Vestibulum porttitor ornare tempor. Donec auctor ex ut nulla sagittis tempus. Vestibulum accumsan aliquet hendrerit.
    </p>
    </div>
  )
}

const UserDescription = (props) => {
  return (
    <div>
    <div className="cause-wrap d-flex flex-wrap justify-content-between">
                    <figure className="m-0">
                        <img src="images/businessman_PNG6564.png" alt="" className="user-profile"/>
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
                    </div>
                </div>
    </div>
  )
}


const DonateButton = (props) => {
  return (
    <div>
        <ProgressBar max="70.000" currentValue="48.500" />
        <a href="#" className="btn gradient-bg mr-2" style={{marginBottom : '20px' }}>Donate Now</a>
    </div>
  )
}


class Project extends Component {

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1> Smart City Project</h1>
            <VideoComponent />
          </div>
          <div className="col-12 col-lg-6">
            <UserDescription/>
            <DonateButton />
          </div>



          <Description/>
        </div>
      </div>
    );
  }
}
export default Project;
