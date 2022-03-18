import {styled} from "@mui/material";

export const useHomeTeamStyles = () => {

    const TeamContainerMUI = styled('section')(({theme}) => ({
        borderTop: '2px solid #ff6505',
        paddingTop: '10px',
        marginBottom: '20px',
    }));

    const TeamTitleUIM = styled('h2')(({theme}) => ({
        fontSize: '34px',
        textAlign: 'center',
    }));

    const TeamListMUI = styled('div')(({theme}) => ({
        marginTop: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *:nth-of-type(3n)': {
            marginRight: '0px'
        }
    }));

    return {
        TeamListMUI,
        TeamTitleUIM,
        TeamContainerMUI
    }
}
