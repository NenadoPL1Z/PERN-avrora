import React, {FC} from 'react';
import {Button, ButtonProps} from "@mui/material";
import {useSmallButtonUIStyles} from "./style";

const SmallButtonUI: FC<ButtonProps> = (props) => {

    const styles = useSmallButtonUIStyles();

    return (
        <Button
            {...props}
            sx={[styles.button]}
        >
            {props.children}
        </Button>
    );
};

export default SmallButtonUI;
