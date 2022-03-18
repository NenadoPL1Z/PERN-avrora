import {styled} from "@mui/material";

export const useVoteItemStyles = () => {
    const ItemContainer = styled('div')(({theme}) => ({
    }))

    const ButtonWrapper = styled('div')(({theme}) => ({
        marginTop: '10px',
        display: 'flex',
    }))

    const ItemTitle = styled('h5')(({theme}) => ({
        fontSize: '22px',
        color: '#ff6505',
    }))
    const CheckboxList = styled('div')(({theme}) => ({
        marginTop: '5px',
        marginLeft: '10px'
    }))

    const buttonSx = {
        width: '190px',
        marginRight: '10px',
        fontSize: '12px'
    }

    return {
        ItemTitle,
        CheckboxList,
        ItemContainer,
        ButtonWrapper,
        buttonSx
    }
}
