import React, {useState} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    margin:'0 auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
 input:{
    height:'38px',
  }
  }));


const App =()=> {

   
  return (
    <div className="App">
      <Container>
      
      <Result />
  
      </Container>
    </div>
  );
}

export default App;
