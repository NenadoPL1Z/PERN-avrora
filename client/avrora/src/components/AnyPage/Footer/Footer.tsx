import React from "react";
import {Box} from "@mui/material";
import Container from "../Container/Container";
import {useFooterStyles} from "./style";
import VkLogoIcon from '../../../UI/svg/vk.svg'
import InstLogoIcon from '../../../UI/svg/instagram.svg'
import FooterItem from "./FooterItem/FooterItem";

const socialData = [
    {
        name: 'vk',
        href: 'https://vk.com/studentpatrul',
        icon: VkLogoIcon,
    },
    {
        name: 'inst',
        href: 'https://www.instagram.com/',
        icon: InstLogoIcon,
    },
]


const Footer = () => {
    const styles = useFooterStyles();

    return (
        <Box component='footer' sx={styles.container}>
            <Container>
                <Box sx={styles.wrapper}>
                    {socialData.map(social => (
                        <FooterItem
                            key={social.name}
                            href={social.href}
                            icon={social.icon}
                            style={styles.icon}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default React.memo(Footer);
