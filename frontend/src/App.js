import { useState } from 'react';
import {
  Button,
  Typography,
  CssBaseline,
  Container,
  Box,
  Grid,
} from '@mui/material';
import { root } from './Api';

function App() {
  const [sentData, setSentData] = useState(null);
  const [receivedData, setReceivedData] = useState(null);

  const handleTestBroker = () => {
    testBroker();
  };

  const testBroker = async () => {
    setSentData('empty request data.');
    try {
      const { data } = await root();
      setReceivedData(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>
          Test microservices
        </Typography>
        <Button variant="contained" onClick={handleTestBroker}>
          Test broker
        </Button>
        <Box>Output shows here...</Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6">Sent...</Typography>
            <Box>{sentData}</Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Received...</Typography>
            <Box>{receivedData}</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
