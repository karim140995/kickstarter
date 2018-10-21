import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div style={loadingStyle}><img src={'/assets/loader.gif'} alt="Loading...." /></div>;
}

const loadingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}


const Donation = Loadable({
  loader: () => import('./components/donation'),
  loading: Loading,
});

const Home = Loadable({
    loader: () => import('./components/home'),
    loading: Loading,
});

const Project = Loadable({
    loader: () => import('./components/project'),
    loading: Loading,
});



const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/donation', exact: true, name: 'Donation', component: Donation },
  { path: '/', exact: true, name: 'Home', component: Home },
];

export default routes;