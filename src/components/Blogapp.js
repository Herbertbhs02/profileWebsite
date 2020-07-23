import React from 'react';
import '../Style/blogapp/blogapp.css'

const Blogapp = () => {
  return (
        <div className='blogapp'>
        <h2>Web Tech blog</h2>
        <p><b>I developed the website using the following tools below:</b></p>
        <p>“The website has been developed using Node.js, EJS, and mongoDB.</p>
            <p><b>Dependencies used:</b> body-parser, ejs, express, lodash and mongoose.
            Most of the javaScript logic is run on the server side, and that’s on of the advantages of using node.js to develop server side based web application."
            </p>
            <p>Please click on the link below to see the website</p>
      <a href="https://shielded-mesa-82632.herokuapp.com/" target="_blank">Tech News</a>
        </div>
  )
}

export default Blogapp;
