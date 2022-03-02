import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";
import {useLoadingUserStyles} from "./style";

const LoadingUser: FC = () => {
    const styles = useLoadingUserStyles()

    return (
        <Box sx={styles.container}>
            <CircularProgress
                sx={styles.spinner}
                disableShrink
            />
        </Box>
    );
};

export default LoadingUser;
