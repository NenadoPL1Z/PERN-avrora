import React, {FC} from 'react';
import {Box} from '@mui/material'
import {useDataRenderStyles} from "./style";

interface DataRenderProps {
    title: string,
    children: React.ReactChildren | React.ReactNode
}

const DataRender: FC<DataRenderProps> = ({title, children}) => {

    const styles = useDataRenderStyles()

    return (
        <Box component='section' sx={styles.container}>
            <Box sx={styles.title} component='h1'>{title}</Box>
            <Box>
                {children}
            </Box>
        </Box>
    );
};

export default React.memo(DataRender);
