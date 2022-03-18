import React, {FC} from 'react';
import {Box} from '@mui/material'
import {useHeaderNavigationStyle} from "./style";
import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import navigationData from './headerNavigationData.json'
import {useUserContext} from "../../../../context/UserContext/UserContext";
import AvatarUI from "../../../../UI/AvatarUI/AvatarUI";
import LinkUI from "../../../../UI/ComponentsUI/LinkUI/LinkUI";

const HeaderNavigation: FC = () => {

    const styles = useHeaderNavigationStyle();
    const isArray = Array.isArray(navigationData)
    const {isAuth, user} = useUserContext()

    console.log(user);


    return (
        <Box component='nav' sx={styles.navigation}>
            <Box component='ul' sx={styles.list}>
                {isArray && (
                    navigationData.map(navItem => (
                        <HeaderNavItem
                            key={navItem.id}
                            href={navItem.href}
                            route={navItem.route}
                            title={navItem.title}
                        />
                    ))
                )}
                {isAuth && (
                    <LinkUI href='/account'>
                        <Box component='li'>
                            <AvatarUI
                                lastName={user.firstName}
                                firstName={user.firstName}
                            />
                        </Box>
                    </LinkUI>
                )}
            </Box>
        </Box>
    );
};

export default React.memo(HeaderNavigation);
