import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AdminClasses from './pages/AdminClasses';
import ClassDetail from './pages/ClassDetail';
import LectureDetail from './pages/LectureDetail';
import jwt from 'jsonwebtoken';
import axios from 'axios';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin/classes" component={AdminClasses} />
        <Route path="/class/:id" component={ClassDetail} />
        <Route path="/lecture/:id" component={LectureDetail} />
      </Switch>
    </Router>
    
  );
}


const jwt = require('jsonwebtoken');
const token = localStorage.getItem('token');
axios.get('http://localhost:5000/api/classes', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});







//const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, 'your_secret_key');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid Token' });
  }


  localStorage.setItem('tokenn', jwtToken);

  const tokenn = localStorage.getItem('tokenn');
axios.get('http://localhost:5000/api/classes', {
  headers: {
    Authorization: `Bearer ${tokenn}`
  }
});

};






export default App;


