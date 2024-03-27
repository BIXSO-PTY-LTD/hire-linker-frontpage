'use client';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { T_TeamMemberProps } from '#shared/typescript';
import { TravelTeamItem } from './components/item';
import { useTranslations } from '#shared/hooks';

type Props = {
    members: T_TeamMemberProps[];
};

export function ExpertListPage({ members }: Props) {
    const translate = useTranslations();

    return (
        <Container
            sx={{
                py: { xs: 5, md: 10 },
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    mx: 'auto',
                    maxWidth: 480,
                    textAlign: 'center',
                    mb: { xs: 8, md: 10 },
                }}
            >
                <Typography variant="h2">{translate('candidate.list.our-team')}</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                    Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio
                    sit amet eros.
                </Typography>
            </Stack>

            <Box
                sx={{
                    columnGap: 3,
                    display: 'grid',
                    rowGap: { xs: 4, md: 5 },
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                }}
            >
                {members.map((member) => (
                    <TravelTeamItem key={member.id} member={member} />
                ))}
            </Box>
        </Container>
    );
}
