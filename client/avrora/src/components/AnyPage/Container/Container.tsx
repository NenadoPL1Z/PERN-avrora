import React, {FC} from 'react';
import {Box} from "@mui/material";
import {useContainerStyles} from './style'

const Container: FC = ({children}) => {

    const styles = useContainerStyles();

    return (
        <Box sx={styles.container}>
            {children}
        </Box>
    );
};

export default Container;
