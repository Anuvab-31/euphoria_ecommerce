import { Box, Grid } from '@mui/material'
import React from 'react'
import PageLayout from '../DefaultLayout/PageLayout';

export interface ImageFrameProps {
    children: any;
}

const Index: React.FC<ImageFrameProps> = ({ children }) => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{
                        background: "url(/Images/LoginBackground.png)",
                        backgroundSize: "cover",
                        // backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <PageLayout>{children}</PageLayout>
                </Grid>
            </Grid>
        </>
    )
}

export default Index