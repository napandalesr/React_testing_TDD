import { Button, Typography } from '@mui/material';
import React from 'react';
import './App.css';

function App() {
  const [ counter, setCounter ] = React.useState(0);

  return <>
  <Typography variant='h2' align='center'>App Counter</Typography>
  <Typography variant='body1' align='center'>Contador: {counter}</Typography>
  <Button fullWidth={true} variant="contained" color='success' onClick={()=>setCounter(counter+1)}>Incrementar</Button>
  <Button fullWidth={true} color='info' onClick={()=>setCounter(counter-1)}>Decrementar</Button>
  <Button fullWidth={true} variant="outlined" color="error" onClick={()=>setCounter(0)}>Reiniciar</Button>
  </>;
}

export default App;
