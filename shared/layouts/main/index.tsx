import Box, { BoxProps } from '@mui/material/Box';

import Header from './header';
import { HEADER } from './simple/config-layout';
import { LayoutWrapper } from '../layout-wrapper';

type Props = BoxProps & {
    children: React.ReactNode;
    headerOnDark?: boolean;
    disabledSpacing?: boolean;
};

export function MainLayout({ children, headerOnDark = false, disabledSpacing = false, sx, ...other }: Props) {
    return (
        <LayoutWrapper>
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
                                height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
                            }}
                        />
                    )}

                    {children}
                </Box>
            </Box>
        </LayoutWrapper>
    );
}
