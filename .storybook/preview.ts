import type { Preview } from '@storybook/react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { blueTheme, darkTheme, lightTheme, coloredTheme, dxTheme, ptTheme } from "../src/themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [
    withThemeFromJSXProvider({
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline,
        themes: {
            blue: blueTheme,
            dark: darkTheme,
            light: lightTheme,
            colored: coloredTheme,
            dx: dxTheme,
            pt: ptTheme
        },
        defaultTheme: 'light',
    }),
];

export default preview;