import red from '@material-ui/core/colors/red';
import { createTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
      light: '#ffcd38',
      dark: '#b28704',
      contrastText: '#222',
    },
    secondary: {
      main: pink.A200,
      light: '#f73378',
      dark: '#ab003c',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  spacing: 4,
  overrides: {
    MuiTypography: {
      body2: {
        fontWeight: 500,
        fontSize: '0.80rem',
      },
      subtitle2: {
        fontWeight: 500,
      },
      body1: {
        fontSize: '0.80rem',
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 500,
        fontSize: '0.85rem',
        lineHeight: 'normal',
      },
      root: {
        padding: '4px 16px 4px 24px',
      },
    },
    MuiTableRow: {
      head: {
        height: 48,
      },
      root: {
        height: 40,
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: '24px',
        lineHeight: 'normal',
      },
    },
    MuiListItem: {
      root: {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
    },
    MuiButton: {
      root: {
        minHeight: '32px',
        fontSize: '0.80rem',
        padding: '4px 20px',
        minWidth: '45px',
        borderRadius: '6px',
        margin: '0 8px',
        lineHeight: 'normal',
      },
    },
    MuiInputBase: {
      root: {
        fontSize: '0.9rem',
        lineHeight: 'normal',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '0.9rem',
        lineHeight: 'normal',
      },
    },
    MuiListItemText: {
      root: {
        padding: '0px 0px',
      },
    },
    MuiIconButton: {
      root: {
        padding: 6,
      },
      colorInherit: {
        color: '#FFF',
      },
    },
    MuiTablePagination: {
      toolbar: {
        height: 48,
        minHeight: 48,
      },
    },
    MuiPaper: {
      root: {
        position: 'relative',
        overflow: 'auto',
        flex: 1,
      },
    },
    MuiDialogContent: {
      root: {
        position: 'relative',
        firstChild: {
          paddingTop: 0,
        },
      },
    },
    MuiDialog: {
      paper: {
        position: 'relative',
      },
    },
  },
});

export default theme;
