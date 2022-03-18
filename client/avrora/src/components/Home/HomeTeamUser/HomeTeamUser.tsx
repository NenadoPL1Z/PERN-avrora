import React, {FC} from 'react';
import {useHomeTeamUserStyles} from "./style";
import {useHomeTeamUser} from "./useHomeTeamUser";

interface IHomeTeamUser {
    userInfo: {
        name: string,
        description: string;
        img: string;
    }
}

const HomeTeamUser: FC<IHomeTeamUser> = ({userInfo}) => {

    console.log(userInfo);

    const {
        TeamUserTextMUI,
        TeamUserDescMUI,
        TeamUserNameMUI,
        TeamUserPhotoMUI,
        TeamUserHoverMUI,
        TeamUserContainerMUI,
        TeamUserPhotoContainerMUI
    } = useHomeTeamUserStyles()
    // const {e} = useHomeTeamUser();

    return (
        <TeamUserContainerMUI>
            <TeamUserPhotoContainerMUI>
                <TeamUserPhotoMUI
                    src={userInfo.img}
                    alt={`team/${userInfo.name}`}
                />
            </TeamUserPhotoContainerMUI>
            <TeamUserTextMUI>
                <TeamUserNameMUI>
                    {userInfo.name}
                </TeamUserNameMUI>
            </TeamUserTextMUI>
            <TeamUserHoverMUI>
                <TeamUserDescMUI>
                    {userInfo.description}
                </TeamUserDescMUI>
            </TeamUserHoverMUI>
        </TeamUserContainerMUI>
    );
};

export default React.memo(HomeTeamUser);
