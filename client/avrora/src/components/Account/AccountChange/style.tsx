import {styled} from "@mui/material";

export const useAccountChangeStyles = () => {
    const ChangeContainerMUI = styled('div')(({theme}) => ({
        margin: '10px 0 0 20px',
        width: '100%',

    }));


    const ChangePasswordMUI = styled('div')(({theme}) => ({

    }));

    const InputBoxMUI = styled('div')(({theme}) => ({
        marginBottom: '15px'
    }));

    const ButtonContainerMUI = styled('div')(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-between',
        '& > *': {
            marginRight: '10px'
        },
        '& *:last-child': {
            marginRight: '0'
        }
    }));

    return {
        ChangeContainerMUI,
        ButtonContainerMUI,
        ChangePasswordMUI,
        InputBoxMUI
    }
}
