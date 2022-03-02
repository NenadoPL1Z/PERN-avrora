import React from 'react';
import {Button, ButtonProps} from "@mui/material";
import {FC} from "react";
import {useButtonUIStyles} from "./style";

const ButtonUI: FC<ButtonProps> = (props) => {

    const styles = useButtonUIStyles()

    return (
        <Button
            {...props}
            sx={[styles.button, props.sx as {}]}
        >
            {props.children}
        </Button>
    );
};

export default React.memo(ButtonUI);
