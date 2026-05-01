import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Avatar,
  Card,
  CardContent,
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

const sections = [
  {
    icon: <DescriptionRoundedIcon fontSize="small" />,
    title: 'About',
    description:
      'Use this section later for a concise professional summary, strengths, and the types of engineering roles you are targeting.',
  },
  {
    icon: <AutoStoriesRoundedIcon fontSize="small" />,
    title: 'Writing',
    description:
      'Add essays, notes, and posts about your experience as an engineer, interview prep, lessons learned, and the job-search process.',
  },
  {
    icon: <ExploreRoundedIcon fontSize="small" />,
    title: 'Projects',
    description:
      'Highlight selected work, technical decisions, and impact-focused case studies when you are ready to expand the site.',
  },
  {
    icon: <InsightsRoundedIcon fontSize="small" />,
    title: 'Journey Log',
    description:
      'Capture milestones, reflections, and progress from the search without mixing that writing into the operational tracking files.',
  },
];

export function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ pb: 8, pt: 6 }}>
      <Grid container spacing={3}>
        <Grid size={{ md: 8, xs: 12 }}>
          <Paper
            sx={{
              background:
                'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.08))',
              p: { md: 5, xs: 3 },
            }}
          >
            <Stack spacing={3}>
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
          <Paper sx={{ display: 'flex', height: '100%', p: 3 }}>
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

      <Grid aria-label="Main site sections" container spacing={3} sx={{ mt: 1 }}>
        {sections.map((section) => (
          <Grid key={section.title} size={{ md: 6, xs: 12 }}>
            <Card>
              <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'common.white',
                        height: 36,
                        width: 36,
                      }}
                    >
                      {section.icon}
                    </Avatar>
                    <Typography variant="h5">{section.title}</Typography>
                  </Stack>
                  <Typography color="text.secondary">{section.description}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
