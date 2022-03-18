import {styled} from "@mui/material";

export const useAccountInfoStyles = () => {
    const ContainerInfoMUI = styled('div')(({theme}) => ({
        marginRight: '0px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }));

    const ContainerButtonMUI = styled('div')(({theme}) => ({
        marginTop: '10px'
    }));

    const ContainerInputMUI = styled('div')(({theme}) => ({
        width: 0,
        height: 0,
        visibility: 'hidden'
    }));

    return {
        ContainerInfoMUI,
        ContainerInputMUI,
        ContainerButtonMUI
    }
}
