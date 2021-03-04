import React, { useContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { BoxContext } from './HOCs/boxContext'
import { Grid } from '@material-ui/core';

import './styles/ToggleBoards.module.css'
import ToggleMain from './ToggleBoards/ToggleMain'
import BoxOne from './ToggleBoards/BoxOne';
import BoxTwo from './ToggleBoards/BoxTwo'

function App() {

  const [boxState] = useContext(BoxContext)
  
  return (
    <ThemeProvider theme={boxState.theme}>
      
        <Grid container spacing={2}>
          <Grid item>
            <ToggleMain />
          </Grid>
          <Grid item>
            {boxState.formCheckOne ? <BoxOne /> : null}
          </Grid>          
          <Grid item>
            {boxState.formCheckTwo ? <BoxTwo /> : null}
          </Grid>
        </Grid>
      
    </ThemeProvider>
  );
}

export default App;
