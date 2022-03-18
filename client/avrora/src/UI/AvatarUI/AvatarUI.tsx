import React, {FC, useCallback, useMemo} from 'react';
import {Avatar, SxProps, Theme} from "@mui/material";
import {UserModel} from "../../models/IUserModel";

type typeAvatarUI = Pick<UserModel, 'lastName' | 'firstName'> & {customSx?: SxProps<Theme>} & {src?: string}

const AvatarUI: FC<typeAvatarUI>
    = ({src, lastName, firstName, customSx = {}}) => {

    // const {stringAvatar} = useAvatarUI();
    const name = useMemo(() => (
        `${firstName ? firstName : ''} ${lastName ? lastName : ''}`
    ), [firstName, lastName])


    const stringAvatar = useCallback((name: string, customSx: SxProps<Theme>) => {
        return {
            sx: {
                backgroundColor: '#ff6505',
                ...customSx
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }, [])


    return (
        <Avatar src={src} {...stringAvatar(name, customSx)}/>
    );
};

export default AvatarUI;
