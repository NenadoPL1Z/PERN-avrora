import React, {FC, useMemo} from 'react';
import {Box} from "@mui/material";
import {useHeaderNavItemStyles} from "./style";
import {useHeaderNavItem} from "./useHeaderNavItem";
import LinkUI from "../../../../UI/ComponentsUI/LinkUI/LinkUI";
import {useUserContext} from "../../../../context/UserContext/UserContext";

interface HeaderNavItemProps {
    href: string;
    title: string,
    route: string
}

const HeaderNavItem: FC<HeaderNavItemProps> = ({href, title, route}) => {
    const styles = useHeaderNavItemStyles()
    const {isAuth} = useUserContext()
    const {checkLocation} = useHeaderNavItem();
    const isCurrentTab = checkLocation(href)
    const liStyles = [styles.item, isCurrentTab ? styles.itemActive : {}]
    const isView = useMemo(() => {
        if (route == 'all') return true;
        if (isAuth) return false;
        return true
    }, [isAuth, route])

    return (
        isView ? (
            <Box component='li' sx={liStyles}>
                <LinkUI href={href}>
                    {title}
                </LinkUI>
            </Box>
        ) : <></>
    );
};

export default React.memo(HeaderNavItem);
