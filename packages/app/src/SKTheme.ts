import { BackstageOverrides } from '@backstage/core-components';
import {
  BackstagePaletteOptions,
  createTheme,
  genPageTheme,
  darkTheme,
  BackstageTheme,
  SimpleThemeOptions,
  shapes,
} from '@backstage/theme';

/**
 * Create a custom color palette
 */
const customPalleteColors: BackstagePaletteOptions = {
  ...darkTheme.palette,
  primary: {
    main: '#d97800',
  },
  secondary: {
    main: '#004ABE',
  },
  navigation: {
    // Sidebar
    background: '#000',
    indicator: '#F58220',
    color: '#fff',
    selectedColor: '#fff',
    navItem: {
      hoverBackground: '#4d4d4d',
    },
  },
};

/**
 * Sets the theme options object
 */
const customThemeOptions: SimpleThemeOptions = {
  palette: customPalleteColors,
  defaultPageTheme: 'home',
  /* Headers pages */
  pageTheme: {
    home: genPageTheme({colors: ['#000', '#000'], shape: shapes.wave}),
  },
};

/**
 * Create a custom theme using the defined options
 */
const myCustomTheme = createTheme({
  palette: {
    ...darkTheme.palette,
  },
  defaultPageTheme: 'home',
  fontFamily: "'Muli', 'Arial', 'sans-serif', sans-serif",
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    documentation: genPageTheme({colors: ['#3d91ff', '#000'], shape: shapes.wave2 }),
    tool: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    service: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    website: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    library: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    other: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    app: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
    apis: genPageTheme({ colors: ['#005bd1', '#3d91ff'], shape: shapes.wave2 }),
  },
});

/**
 * An override forces a style value to be subscripted when we are not using it.
 * tokens provided by the theme or for global UI elements that are native to Backstage
 *
 * @param theme BackstageTheme
 * @returns BackstageOverrides
 */
const customThemeOverrides = (theme: BackstageTheme): BackstageOverrides => {
  return {
    // Overrides for all headers
    BackstageHeader: {
      header: {
        width: 'auto',
        background: 'rgba(255,255,255,0.7)',
        borderBottom: '1px solid #E7EBF0',
        boxShadow: 'none',

      },
      title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
      },
      subtitle: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
    },
    BackstageHeaderLabel: {
      
    }
  };
};

/**
 * The final generated theme object
 * with custom colors and global overrides
 */
export const SKTheme: BackstageTheme = {
  ...myCustomTheme,
  overrides: {
    ...myCustomTheme.overrides,
    ...customThemeOverrides(myCustomTheme),
  },
};