import React, {FC, FunctionComponent} from 'react';
import {Box} from "@mui/material";
import {SxProps} from "@mui/material";

interface FooterItemProps {
    href: string
    icon: FunctionComponent,
    style: SxProps
}

const FooterItem: FC<FooterItemProps> = ({href, icon, style}) => {

    const IconComponent = icon

    return (
        <Box
            component='a'
            href={href}
            // href='https://vk.com/studentpatrul'
            target='_blank'
            sx={style}
        >
            <IconComponent/>
        </Box>
    );
};

export default FooterItem;
