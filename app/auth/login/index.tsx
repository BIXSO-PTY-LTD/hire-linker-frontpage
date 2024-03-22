'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { PATHS } from '#app/routes';
import { Form, Iconify, RouterLink, TextField } from '#shared/components';
import { useBoolean } from '#shared/hooks';

export const LoginPage = () => {
    const passwordShow = useBoolean();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('That is not an email'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password should be of minimum 6 characters length'),
    });

    const defaultValues = {
        email: '',
        password: '',
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            console.log('DATA', data);
        } catch (error) {
            console.error(error);
        }
    });

    const renderHead = (
        <div>
            <Typography variant="h3" paragraph>
                Login
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`Don’t have an account? `}
                <Link component={RouterLink} href={PATHS.AUTH.REGISTER} variant="subtitle2" color="primary">
                    Get started
                </Link>
            </Typography>
        </div>
    );

    const renderSocials = (
        <Stack direction="row" spacing={2}>
            <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="logos:google-icon" width={24} />
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
            </Button>
        </Stack>
    );

    const renderForm = (
        <Form methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5} alignItems="flex-end">
                <TextField name="email" label="Email address" />

                <TextField
                    name="password"
                    label="Password"
                    type={passwordShow.value ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={passwordShow.onToggle} edge="end">
                                    <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Link
                    component={RouterLink}
                    href={PATHS.AUTH.FORGOT_PASSWORD}
                    variant="body2"
                    underline="always"
                    color="text.secondary"
                >
                    Forgot password?
                </Link>

                <LoadingButton
                    fullWidth
                    color="inherit"
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Login
                </LoadingButton>
            </Stack>
        </Form>
    );

    return (
        <>
            {renderHead}

            {renderForm}

            <Divider>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    or continue with
                </Typography>
            </Divider>

            {renderSocials}
        </>
    );
};
