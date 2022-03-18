import {styled} from '@mui/material'

export const useNewsIdTitleStyles = () => {
    const Title = styled('h1')(({ theme }) => ({
        fontSize: '40px',
        lineHeight: '42px',
        fontWeight: 700,
        color: '#ff6505',
        marginBottom: '15px',
    }));
    
    return {
        Title
    }
}