import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
//import './App.css';
import { Link } from "react-router-dom";
import MainRoute from './components/MainRoute';

 class App extends Component {
  render() {
    return (
      <div>
      <div className="demo-big-content">
      <Layout>
          <Header title="My Profile" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/Projects">Projects</Link>
                  <a href="https://github.com/Herbertbhs02?tab=repositories" target="_blank" >GitHub</a>
                  <Link to="/Contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Select">
              <Navigation>
              <Link to="/">Home</Link>
                  <Link to="/Contact">Contact</Link>
                  <Link to="/Projects">Projects</Link>
                  
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <MainRoute/>
          </Content>
          
      </Layout>
  </div>

      </div>
    )
  }
}
export default App;




