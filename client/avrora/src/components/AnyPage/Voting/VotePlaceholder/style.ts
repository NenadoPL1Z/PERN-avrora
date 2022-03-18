import {styled} from "@mui/material";

export const useVotePlaceholderStyles = () => {
    const VoteButton = styled('div')(({theme}) => ({
        width: '330px'
    }));

    const VoteText = styled('h2')(({ theme }) => ({
        textAlign: 'center',
        marginBottom: '20px'
    }));

    const VoteTitle = styled('h2')(({ theme }) => ({
        fontWeight: 700,
        color: '#ff6505',
        fontSize: '24px',
        lineHeight: '26px'
    }));

    const VoteSubtitle = styled('h2')(({ theme }) => ({
        fontWeight: 500,
        color: '#ffffff',
        fontSize: '16px',
    }));

    return {
        VoteText,
        VoteButton,
        VoteTitle,
        VoteSubtitle
    }
}
