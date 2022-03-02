import React, {FC} from 'react';
import {Box} from '@mui/material'
import {useHeaderNavigationStyle} from "./style";
import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import navigationData from './headerNavigationData.json'
import {useUserContext} from "../../../../context/UserContext/UserContext";

const HeaderNavigation: FC = () => {

    const styles = useHeaderNavigationStyle();
    const isArray = Array.isArray(navigationData)
    const {isAuth} = useUserContext()

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
            </Box>
        </Box>
    );
};

export default React.memo(HeaderNavigation);
