    import React from 'react';
    import ReactDOM from 'react-dom';
    import api from './test/stubAPI';
    import  './App.css';
    import buttons from './config/buttonsConfig';
    import { Router, Link, Route, browserHistory } from 'react-router';


var About = React.createClass({  
  render: function() {
    return (
      <div>
        <h2>About page</h2>
      </div>
    );
  } 
  });