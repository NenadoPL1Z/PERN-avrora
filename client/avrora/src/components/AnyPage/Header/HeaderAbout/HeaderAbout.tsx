import React, {FC} from 'react';
import {Box} from "@mui/material";
import Avrora from "../../../../UI/svg/AvroraLogo.svg";
import {useHeaderAboutStyles} from "./style";
import {useCustomRouter} from "../../../../hook/useCustomRouter";

const HeaderAbout: FC = () => {

    const styles = useHeaderAboutStyles();
    const {pushTo} = useCustomRouter()

    return (
        <Box
            sx={styles.headerAbout}
            onClick={pushTo('/')}
        >
            <Box sx={styles.headerLogo}>
                <Avrora/>
            </Box>
            <Box component='span' sx={styles.headerTitle}>
                Студенческий патруль <br/> "АВРОРА"
            </Box>
        </Box>
    );
};

export default React.memo(HeaderAbout);
