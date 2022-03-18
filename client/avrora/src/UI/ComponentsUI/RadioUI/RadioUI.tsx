import React from 'react';
import {useRadioUIStyles} from "./style";
import {Radio} from "@mui/material";

const RadioUI = () => {

    const {radioSX} = useRadioUIStyles()

    return (
        <Radio sx={radioSX} />
    );
};

export default RadioUI;
