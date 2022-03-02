import React, {FC} from "react";
import {Box} from "@mui/material";


interface MainProps {
    children: React.ReactNode | React.ReactChildren
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <Box component='main'>
            {children}
        </Box>
    )
}

export default React.memo(Main);
