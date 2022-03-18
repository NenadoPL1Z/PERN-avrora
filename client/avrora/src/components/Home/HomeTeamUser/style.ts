import {styled} from "@mui/material";

export const useHomeTeamUserStyles = () => {

    const TeamUserContainerMUI = styled('div')(({theme}) => ({
        width: '32.2%',
        marginRight: '20px',
        marginBottom: '20px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '3px solid #ffffff',
        transition: '.2s all linear',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    }))


    const TeamUserTextMUI = styled('div')(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }))

    const TeamUserNameMUI = styled('h6')(({theme}) => ({
        textAlign: 'center',
        fontSize: '20px',
        lineHeight: '22px',
        padding: '10px 5px',
    }))

    const TeamUserHoverMUI = styled('div')(({theme}) => ({
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(252, 125, 41, 0.95)',
        opacity: 0,
        zIndex: 1,
        transition: '.2s all linear',
        '&:hover': {
            opacity: 1
        }
    }))

    const TeamUserDescMUI = styled('p')(({theme}) => ({
        padding: '20px'
    }))

    const TeamUserPhotoMUI = styled('img')(({theme}) => ({
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }))

    const TeamUserPhotoContainerMUI = styled('div')(({theme}) => ({
        width: '100%',
        height: '100%',
        maxHeight: '400px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '2px solid #ffffff',
        '&:after': {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(252, 125, 41, 1)',
            filter: 'blur(15px)',
            zIndex: -1
        }
    }))

    return {
        TeamUserTextMUI,
        TeamUserNameMUI,
        TeamUserDescMUI,
        TeamUserHoverMUI,
        TeamUserPhotoMUI,
        TeamUserContainerMUI,
        TeamUserPhotoContainerMUI
    }
}
