import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar color="inherit" elevation={0} position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                bgcolor: 'primary.main',
                borderRadius: 2.5,
                color: 'common.white',
                display: 'inline-flex',
                height: 40,
                justifyContent: 'center',
                mr: 1.5,
                width: 40,
              }}
            >
              <WorkOutlineRoundedIcon fontSize="small" />
            </Box>
            <Stack spacing={0.25}>
              <Typography variant="subtitle1">Angela Rubalcava</Typography>
              <Typography color="text.secondary" variant="caption">
                Software Engineer
              </Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <HomePage />
    </Box>
  );
}

export default App;
