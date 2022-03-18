import {styled} from "@mui/material";

export const useHomeAvroraStyle = () => {

    const ContainerMUI = styled('div')(({theme}) => ({
        width: '100%',
        height: 'calc(100vh - 62px)',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0) 100%)',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: '1',
    }));

    const WrapperMUI = styled('div')(({theme}) => ({
        height: '100%',
        maxWidth: '418px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '150px'
    }));

    const TitleMUI = styled('h1')(({theme}) => ({
        margin: '0 0 20px',
        textTransform: 'uppercase',
        fontSize: '40px',
        fontWeight: 700,
        lineHeight: '42px',
        textAlign: 'center',
        transition: '.2s all linear',
        '& > span': {
            transition: 'inherit',
            color: '#ff6505'
        },
        '&:hover': {
            color: '#ff6505',
            '& > span': {
                color: 'white'
            }
        }
    }));

    const ContactMUI = styled('h3')(({theme}) => ({
        marginTop: '10px',
        fontSize: '19px',
        lineHeight: '22px',
        fontWeight: 400,
    }));

    const sxButton = {
        backgroundColor: '#1e1e1e',
        '&:hover': {
            backgroundColor: '#444444'
        }
    }

    return {
        sxButton,
        TitleMUI,
        ContactMUI,
        WrapperMUI,
        ContainerMUI,
    }
}
