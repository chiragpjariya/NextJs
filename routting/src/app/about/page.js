import React from 'react';
import Linking from "../components/Linking";
import Customebtn from '../components/Customebtn';

function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">About Page</h1>
      <p className="text-center">This is the about page.</p>
      <Linking linking="/" linkText="Home" />
      <Customebtn
        linkText='home'
        linking='/'
        
      />
      <br/>
      <br/>
      <Customebtn
        linkText='Nested About'
        linking='/about/nestedAbout'
      />
    </div>
  );
}

export default About;
