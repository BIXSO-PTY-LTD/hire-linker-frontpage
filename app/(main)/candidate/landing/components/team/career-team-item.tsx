import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

import { _socials } from '#shared/mock';
import { bgGradient } from '#shared/theme/css';

import Image from '#shared/components/image';
import Iconify from '#shared/components/iconify';

import { ITeamMemberProps } from 'src/types/team';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
    ...bgGradient({
        startColor: alpha(theme.palette.grey[900], 0.88),
        endColor: alpha(theme.palette.grey[900], 0.88),
    }),
    top: 0,
    left: 0,
    zIndex: 8,
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
    }),
    '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

type Props = {
    member: ITeamMemberProps;
};

export default function CareerTeamItem({ member }: Props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <StyledOverlay>
                <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        top: 0,
                        width: 1,
                        bottom: 0,
                        zIndex: 9,
                        m: 'auto',
                        position: 'absolute',
                        color: 'common.white',
                    }}
                >
                    <Typography variant="h6">{member.name}</Typography>

                    <Typography variant="body2" sx={{ opacity: 0.72, pb: 1 }}>
                        {member.role}
                    </Typography>

                    <Stack direction="row">
                        {_socials.map((social) => (
                            <IconButton key={social.value} color="primary">
                                <Iconify icon={social.icon} />
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </StyledOverlay>

            <Image src={member.photo} alt={member.name} ratio="1/1" />
        </Box>
    );
}
