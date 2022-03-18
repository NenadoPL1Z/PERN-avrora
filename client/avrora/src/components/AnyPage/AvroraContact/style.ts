import {styled} from "@mui/material";

export const useAvroraContactStyles = () => {
    const AvroraContainerMUI = styled('div')(({theme}) => ({
        marginTop: '8px'
    }));

    const ContactItemMUI = styled('div')(({theme}) => ({
        display: 'flex',
        marginBottom: '10px',
        '& > *:first-child': {
            marginRight: '10px'
        }
    }));


    const ContactPhoneMUI = styled('a')(({theme}) => ({
        fontSize: '18px',
        fontWeight: 700,
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
            content: "''",
            position: 'absolute',
            left: '-100%',
            bottom: 0,
            width: '100%',
            height: '3px',
            backgroundColor: '#ff6505',
            transition: '.2s all linear'
        },
        '&:hover': {
            '&::after': {
                left: 0,
                bottom: 0
            },
        }
    }));

    const ContactAddressMUI = styled('span')(({theme}) => ({
        fontSize: '18px',
    }));

    const SocialsMUI = styled('span')(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            fill: '#4C75A3',
            width: '25px',
            height: '25px',
            marginRight: '5px'
        },
        '* > *:last-child': {
            marginRight: '0px'
        }
    }));

    return {
        SocialsMUI,
        ContactItemMUI,
        ContactPhoneMUI,
        ContactAddressMUI,
        AvroraContainerMUI,
    }
}
