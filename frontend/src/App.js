import { useState } from 'react';
import {
  Button,
  Typography,
  CssBaseline,
  Container,
  Box,
  Grid,
} from '@mui/material';
import { authenticate, root, sendMail, log, logGrpc } from './Api';

function App() {
  const [sentData, setSentData] = useState(null);
  const [receivedData, setReceivedData] = useState(null);

  const handleTestBroker = async () => {
    setSentData('empty request data.');
    try {
      const { data } = await root();
      setReceivedData(JSON.stringify(data, null, 4));
    } catch (error) {
      setReceivedData(JSON.stringify(error, null, 4));
    }
  };

  const handleTestAuthenticate = async () => {
    const payload = {
      email: 'admin@example.com',
      password: 'verysecret',
    };
    setSentData(JSON.stringify(payload, null, 4));
    try {
      const { data } = await authenticate(payload);
      setReceivedData(JSON.stringify(data, null, 4));
    } catch (error) {
      setReceivedData(JSON.stringify(error, null, 4));
    }
  };

  const handleTestLog = async () => {
    const payload = {
      name: 'some name',
      data: 'some data',
    };
    setSentData(JSON.stringify(payload, null, 4));
    try {
      const { data } = await log(payload);
      setReceivedData(JSON.stringify(data, null, 4));
    } catch (error) {
      setReceivedData(JSON.stringify(error, null, 4));
    }
  };

  const handleTestSendMail = async () => {
    const payload = {
      from: 'me@example.com',
      to: 'you@example.com',
      subject: 'a letter',
      message: 'love you',
    };
    setSentData(JSON.stringify(payload, null, 4));
    try {
      const { data } = await sendMail(payload);
      setReceivedData(JSON.stringify(data, null, 4));
    } catch (error) {
      setReceivedData(JSON.stringify(error, null, 4));
    }
  };

  const handleTestGrpc = async () => {
    const payload = {
      name: 'grpc',
      data: 'grpc',
    };
    setSentData(JSON.stringify(payload, null, 4));
    try {
      const { data } = await logGrpc(payload);
      setReceivedData(JSON.stringify(data, null, 4));
    } catch (error) {
      setReceivedData(JSON.stringify(error, null, 4));
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
        <Button variant="contained" onClick={handleTestAuthenticate}>
          Test authenticate
        </Button>
        <Button variant="contained" onClick={handleTestLog}>
          Test log
        </Button>
        <Button variant="contained" onClick={handleTestSendMail}>
          Test send mail
        </Button>
        <Button variant="contained" onClick={handleTestGrpc}>
          Test grpc
        </Button>
        <Box>Output shows here...</Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6">Sent...</Typography>
            <Box>
              <pre>{sentData}</pre>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Received...</Typography>
            <Box>
              <pre>{receivedData}</pre>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
