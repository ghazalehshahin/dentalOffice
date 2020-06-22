import React from 'react';

import './App.css';

import  ReservePage from './pages/reservePage/reservepage.component';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';
import FooterPage from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import {ServicePage} from './pages/servicepage/servicepage.comonent';
import {About} from './pages/about-doctor/about-dr.component';
import {Contact} from './pages/contact/contact.component';
import {Protocols} from './pages/protocols/protocols.component';
import {Covid} from './pages/covid/covid.component';
import { Report } from './pages/report-bug/report.component';

class App extends React.Component {
  render()
  {  
    return (
        <div className="App">
          <Header />        
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/reserve' component = {ReservePage}/>
            <Route  path = '/services' component = {ServicePage}/>
            <Route  path = '/about' component = {About}/>
            <Route  path = '/contact' component = {Contact}/>
            <Route  path = '/protocols' component = {Protocols}/>
            <Route  path = '/covid' component = {Covid}/>
            <Route  path = '/bugreport' component = {Report}/>
          </Switch>
          <FooterPage/>
        </div>
    );
  }
}

export default App;
