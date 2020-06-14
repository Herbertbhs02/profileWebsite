import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
//import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }
    
    render() {
        return (
             
            <div>
            <nav>
            <div class="nav-wrapper ">
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <div className='container'>
              <ul class="right hide-on-med-and-down">
              <li >
             
            </li>
              
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
                  
              </ul>
              </div>
              
            </div>
          </nav>
        
          <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          
            </div>
        
        
        );
    }
}

export default Navbar;