import React from 'react';
import {useHomeTeamStyles} from "./style";
import {useHomeTeam} from "./useHomeTeam";
import Container from "../../AnyPage/Container/Container";
import HomeTeamUser from "../HomeTeamUser/HomeTeamUser";

const HomeTeam = () => {

    const {
        TeamListMUI,
        TeamTitleUIM,
        TeamContainerMUI
    } = useHomeTeamStyles()
    const {teamData, isTeamData} = useHomeTeam()

    return (
        <TeamContainerMUI>
            <Container>
                <TeamTitleUIM>
                    Наша команда
                </TeamTitleUIM>
                <TeamListMUI>
                    {isTeamData && (
                        teamData.map(user => (
                            <HomeTeamUser
                                key={user.name}
                                userInfo={user}
                            />
                        ))
                    )}
                </TeamListMUI>
            </Container>
        </TeamContainerMUI>
    );
};

export default React.memo(HomeTeam);
