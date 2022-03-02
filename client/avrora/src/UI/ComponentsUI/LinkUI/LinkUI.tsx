import React, {FC, useMemo} from 'react';
import Link from 'next/link'
import {Box} from '@mui/material'
import {useLinkUIStyles} from "./style";

interface LinkUIProps {
    href: string,
    children: React.ReactChildren | React.ReactNode
}

const LinkUI: FC<LinkUIProps> = ({href, children}) => {
    const styles = useLinkUIStyles();

    return (
        <Link href={href}>
            <Box
                sx={styles.link}
            >
                {children}
            </Box>
        </Link>
    );
};

export default React.memo(LinkUI);
