import {
  Button,
  Typography,
  CssBaseline,
  Container,
  Box,
  Grid,
} from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>
          Test microservices
        </Typography>
        <Box>Output shows here...</Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6">Sent...</Typography>
            <Box>Output shows here...</Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Received...</Typography>
            <Box>Output shows here...</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
