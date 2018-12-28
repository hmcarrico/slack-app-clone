import React from 'react';
import {Grid} from 'semantic-ui-react';
import './App.css';

const App = () => (
  <Grid>
    <ColorPanel />
    <SidePanel />
    <Messages />
    <MataPanel />
  </Grid>
)

export default App;