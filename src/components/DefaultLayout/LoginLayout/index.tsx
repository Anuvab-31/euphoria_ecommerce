import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { LoginLayoutProps } from '../../../utils/AllProps';
import LoginTopBar from './LoginTopBar';

const useStyles = makeStyles(() => ({
    root: {
        // backgroundColor: 'red',
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    }
}));

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <LoginTopBar />
            <Box className={classes.contentContainer}>
                <Box className={classes.content}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default LoginLayout