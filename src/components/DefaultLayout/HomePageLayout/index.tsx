import React, { useState } from 'react'
// import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { HomePageLayoutProps } from '../../../utils/AllProps';
import { Box, Drawer, Typography } from '@mui/material';
import TopBar from './TopBar';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        overflow: "hidden",
        width: "100%",
    },
    mobileDrawer: {
        width: "250px",
    },
    desktopDrawer: {
        width: "250px", //256
        height: "100%", // 'calc(100%-64)'
    },

}));

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {

    const classes = useStyles();
    // const Router = useRouter();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [menuButton, setMenuButton] = useState(1);

    const categories = [
        {
            id: 1,
            title: "Shop",
            path: "",
            uId: 111
        },
        {
            id: 2,
            title: "Men",
            path: "",
            uId: 112
        },
        {
            id: 3,
            title: "Women",
            path: "",
            uId: 113
        },
        {
            id: 4,
            title: "Combos",
            path: "",
            uId: 114
        },
        {
            id: 5,
            title: "Joggers",
            path: "",
            uId: 115
        },
    ];

    // left drawer contents part
    const sideBarContents = (
        <Box height="100%" display="flex" flexDirection="column">
            <Box alignItems="center" display="flex" flexDirection="column" p={2}>
                {/* <Image src={kemnu_logo} alt="kemnu logo" /> */}
                <img src={'/Icons/Logo.png'} />

            </Box>

            <Box p={2}>
                {categories?.map((e, i) => (
                    <>
                        <Box
                            key={i}
                            display={"flex"}
                            borderRadius={2}
                            // bgcolor={e?.path === Router?.pathname ? "#FFD6D6" : ""} //background color change according to path name
                            bgcolor={menuButton === e?.id ? "#70908B" : ""}
                            color={menuButton === e?.id ? '#3C4242' : "#807D7E"}
                            p={1.5}
                            mb={2.8}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            onClick={async () => {
                                //onClick to show the right content part
                                // await Router.push(e?.path);
                                setMenuButton(i + 1)
                            }}
                            sx={{ cursor: "pointer" }}
                        >
                            <Box>
                                <Typography variant="body2" sx={{
                                    fontWeight: menuButton === e?.id ? "700" : "400",
                                }}>{e?.title}</Typography>
                            </Box>
                        </Box>
                    </>
                ))}
            </Box>
        </Box>
    );

    //menu for desktop view
    const menuContents = (
        <Box height="100%" display="flex" p={2} justifyContent={'center'} gap={5}>
            {categories?.map((e, i) => (
                <>
                    <Box
                        key={e.uId}
                        display={"flex"}
                        borderRadius={2}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        sx={{ cursor: "pointer" }}
                        onClick={() => setMenuButton(i + 1)}
                    >
                        <Box>
                            <Typography variant="body2" sx={{
                                color: menuButton === e?.id ? '#3C4242' : "#807D7E",
                                fontWeight: menuButton === e?.id ? "700" : "400",
                            }}>{e?.title}</Typography>
                        </Box>
                    </Box>
                </>
            ))}
        </Box>
    );


    return (
        <Box className={classes.root}>
            {/*</AppBar>*/}
            {/* this is the toggle button for side bar which will hidden in mobile view  */}
            <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} menuContents={menuContents} />

            {/* this is the mobile or tablet view sidebar and its contents */}
            <Drawer
                anchor="left"
                classes={{ paper: classes.mobileDrawer }}
                open={isMobileNavOpen}
                onClose={() => { setMobileNavOpen(false); }}>
                {sideBarContents}
            </Drawer>


            <Box sx={{ height: '100vh', width: '100%' }}>
                {children}
            </Box>
        </Box>
    )
}

export default HomePageLayout