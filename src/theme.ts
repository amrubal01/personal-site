import { createTheme, type ThemeOptions } from '@mui/material/styles';

type ThemePresetName = 'moss-mist';

const themePresets: Record<ThemePresetName, ThemeOptions> = {
  'moss-mist': {
    palette: {
      background: {
        default: '#F7F8F4',
        paper: '#FFFFFF',
      },
      primary: {
        main: '#3F6B52',
      },
      secondary: {
        main: '#A3B18A',
      },
      text: {
        primary: '#233028',
        secondary: '#5E6B63',
      },
    },
  },
};

export const activeThemePreset: ThemePresetName = 'moss-mist';

export const appTheme = createTheme({
  ...themePresets[activeThemePreset],
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
        },
      },
    },
  },
});
