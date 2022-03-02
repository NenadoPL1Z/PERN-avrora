import React, {FC} from "react";
import {Box} from "@mui/material";
import {useHeaderStyles} from "./style";
import Container from "../Container/Container";
import HeaderAbout from "./HeaderAbout/HeaderAbout";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";

const Header: FC = () => {

    const styles = useHeaderStyles();

    return (
        <Box component='header' sx={styles.container}>
            <Container>
                <Box sx={styles.innerWrapper}>
                    <HeaderAbout/>
                    <HeaderNavigation/>
                </Box>
            </Container>
        </Box>
    )
}

export default React.memo(Header);
