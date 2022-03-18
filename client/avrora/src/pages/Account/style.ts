import {styled} from "@mui/material";

export const useAccountStyles = () => {

    const AccountContainer = styled('section')(({theme}) => ({
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }))

    const AccountWrapper = styled('div')(({theme}) => ({
        width: '100%',
        maxWidth: '650px',
        backgroundColor: '#1e1e1e',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 0 10px black',
    }))

    const AccountTitle = styled('h4')(({theme}) => ({
        fontSize: '26px',
        lineHeight: '28px',
        marginBottom: '10px'
    }))


    const AccountContent = styled('form')(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-between',
    }))

    return {
        AccountContainer,
        AccountWrapper,
        AccountTitle,
        AccountContent
    }
}
