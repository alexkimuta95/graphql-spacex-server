import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import logo from './spacex.jpg';
import './App.css';

const client = new ApolloClient({
  uri :'http://localhost:5000/graphql'
})
class App extends Component{
  render(){
  return (
    <ApolloProvider client={client}>
      <div className="container">
     <img src={logo} alt="spacex" style={{ width:300,display:'block', margin:'auto' }}></img>
    </div>
    </ApolloProvider>
  );
}

export default App;