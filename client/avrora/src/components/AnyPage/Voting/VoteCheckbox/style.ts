import {styled} from "@mui/material";

export const useVoteCheckboxStyles = () => {
    const CheckboxItem = styled('div')(({theme}) => ({
    }))
    const CheckboxTitle = styled('h6')(({theme}) => ({
        fontSize: '16px',
        marginBottom: '10px'
    }))

    return {
        CheckboxItem,
        CheckboxTitle
    }
}
