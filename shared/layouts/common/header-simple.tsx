import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { paths } from '#shared/paths';
import { RouterLink } from '#shared/components';

import { useOffSetTop } from '#shared/hooks';

import { bgBlur } from '#shared/theme/css';

import { Logo } from '#shared/components';

import { HEADER } from '#shared/layouts/main/simple/config-layout';
import HeaderShadow from './header-shadow';
import SettingsButton from './settings-button';

export function HeaderSimple() {
    const theme = useTheme();

    const offset = useOffSetTop(HEADER.H_DESKTOP);

    return (
        <AppBar>
            <Toolbar
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(offset && {
                        ...bgBlur({
                            color: theme.palette.background.default,
                        }),
                        height: {
                            md: HEADER.H_DESKTOP_OFFSET,
                        },
                    }),
                }}
            >
                <Logo />

                <Stack spacing={1} flexGrow={1} direction="row" alignItems="center" justifyContent="flex-end">
                    <SettingsButton />

                    <Link href={paths.support} component={RouterLink} color="inherit" sx={{ typography: 'subtitle2' }}>
                        Need help?
                    </Link>
                </Stack>
            </Toolbar>

            {offset && <HeaderShadow />}
        </AppBar>
    );
}
