import './App.css'

import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home';
import Cities from './pages/cities';
import Navbar from './components/includes/Navbar';
import CityModal from './components/includes/CityModal';

function App() {
  const [bg] = useState('clearBg');
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () =>{
    setShowModal(true);
  }
  const hideModalHandler = () =>{
    setShowModal(false);
  }

  // const backgroundHandler = (status) =>{
  //   console.log(status)
  //   if(status.search('cloud') !== -1){
  //     setBg('cloudsBg')
  //   }else if(status.search('rain') !== -1 || status.search('drizzle') !== -1){
  //     setBg('rainBg')
  //   }else if(status.search('thunderstorm') !== 1){
  //     setBg('thunderBg')
  //   }else{
  //     setBg('clearBg')
  //   }
  // }

  return (
    <div className={`App container-fluid ${bg}`}>
        <CityModal 
          showModal={showModal}
          hideModalHandler={hideModalHandler}
        />
        <Navbar />
        <Switch>
          <Route path="/" exact> <Redirect to="/home" /></Route>
          <Route path="/home">
            <Home showModal={showModalHandler} hideModal={hideModalHandler}/>
          </Route>
          <Route exact path="/cities">
            <Cities showModal={showModalHandler} hideModal={hideModalHandler} />
          </Route>
          <Route path="/cities/:cityId">
            <Cities showModal={showModalHandler} hideModal={hideModalHandler} />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
