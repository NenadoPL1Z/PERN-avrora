import React from 'react';
import {Box} from "@mui/material";
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import {usePlaceholderImgStyles} from "./style";

const PlaceholderImg = () => {

    const styles = usePlaceholderImgStyles()

    return (
        <Box sx={styles.container}>
            <LocalSeeIcon
                sx={styles.icon}
            />
        </Box>
    );
};

export default React.memo(PlaceholderImg);
