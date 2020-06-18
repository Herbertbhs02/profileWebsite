import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from "react-router-dom";
import MainRoute from './components/MainRoute';

 class App extends Component {
//function to close Drawer after click.
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
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
              <Link to="/" onClick={() => this.hideToggle()}/*Hide after click*/>Home</Link>
                  <Link to="/Contact" onClick={() => this.hideToggle()}/*Hide after click*/ >Contact</Link>
                  <Link to="/Projects" onClick={() => this.hideToggle()}/*Hide after click*/>Projects</Link>
                  
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




