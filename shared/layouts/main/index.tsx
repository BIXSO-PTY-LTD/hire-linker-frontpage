import Box, { BoxProps } from '@mui/material/Box';

import Header from './header';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  children: React.ReactNode;
  headerOnDark?: boolean;
  disabledSpacing?: boolean;
};

export function MainLayout({
  children,
  headerOnDark = false,
  disabledSpacing = false,
  sx,
  ...other
}: Props) {
  return (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Header headerOnDark={headerOnDark} />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {!(disabledSpacing || headerOnDark) && (
          <Box
            sx={{
            }}
          />
        )}

        {children}
      </Box>

    </Box>
  );
}
