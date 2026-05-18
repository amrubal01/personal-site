import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import {
  Avatar,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { profile } from '../data/profile';

export function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ pb: 10, pt: 8 }}>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'stretch', justifyContent: 'center', minHeight: { md: '70vh' } }}
      >
        <Grid size={{ md: 8, xs: 12 }}>
          <Paper
            sx={{
              background:
                'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.08))',
              display: 'flex',
              height: '100%',
              p: { md: 6, xs: 3.5 },
            }}
          >
            <Stack spacing={3} sx={{ justifyContent: 'center' }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    fontWeight: 700,
                  }}
                >
                  AR
                </Avatar>
                <Chip color="primary" label="Full Stack Software Engineer" />
              </Stack>
              <Typography variant="h1">Angela Rubalcava</Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 720 }} variant="h5">
                Full Stack Software Engineer with 3 years of experience building
                and shipping production systems across frontend, backend, and
                DevOps in a fast-paced startup environment. Proven track record of
                reducing bugs, improving developer workflows, and delivering
                compliance-critical features.
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Paper sx={{ display: 'flex', height: '100%', p: 3.5 }}>
            <Stack
              spacing={2.5}
              sx={{ alignItems: 'stretch', flexGrow: 1, height: '100%', justifyContent: 'space-between' }}
            >
              <Avatar
                alt={profile.headshotAlt}
                src={profile.headshotSrc || undefined}
                variant="rounded"
                sx={{
                  bgcolor: 'secondary.main',
                  fontSize: '2rem',
                  fontWeight: 700,
                  flexGrow: 1,
                  height: { md: 320, xs: 260 },
                  maxWidth: '100%',
                  minHeight: { md: 320, xs: 260 },
                  width: '100%',
                  '& img': {
                    objectFit: 'cover',
                  },
                }}
              >
                AR
              </Avatar>
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', width: '100%' }}>
                <Tooltip title={profile.linkedinUrl ? 'Open LinkedIn' : 'Add LinkedIn URL in src/data/profile.ts'}>
                  <span>
                    <IconButton
                      color="primary"
                      component="a"
                      disabled={!profile.linkedinUrl}
                      href={profile.linkedinUrl || undefined}
                      rel="noreferrer"
                      size="large"
                      sx={{ height: 56, width: 56 }}
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title={profile.resumeUrl ? 'Open resume PDF' : 'Add resume URL in src/data/profile.ts'}>
                  <span>
                    <IconButton
                      color="primary"
                      component="a"
                      disabled={!profile.resumeUrl}
                      href={profile.resumeUrl || undefined}
                      rel="noreferrer"
                      size="large"
                      sx={{ height: 56, width: 56 }}
                      target="_blank"
                    >
                      <PictureAsPdfRoundedIcon />
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title={profile.githubUrl ? 'Open GitHub' : 'Add GitHub URL in src/data/profile.ts'}>
                  <span>
                    <IconButton
                      color="primary"
                      component="a"
                      disabled={!profile.githubUrl}
                      href={profile.githubUrl || undefined}
                      rel="noreferrer"
                      size="large"
                      sx={{ height: 56, width: 56 }}
                      target="_blank"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
