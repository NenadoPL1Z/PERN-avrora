import {styled} from '@mui/material'

export const useNewsIdStyles = () => {
    const NewsContainer = styled('section')(({ theme }) => ({
        maxWidth: '800px',
        width:'100%',
        padding: '10px 15px 10px',
        margin: '20px auto',
        borderRadius: '20px',
        backgroundColor: '#1e1e1e',
        boxShadow: '0 0 10px #000000'
    }));

    const VotingContainer = styled('div')(({ theme }) => ({
        margin: '20px 0'
    }));

    const NewsImgContainer = styled('div')(({ theme }) => ({
        marginBottom: '10px',
    }));

    return {
        NewsContainer,
        VotingContainer,
        NewsImgContainer
    }
}
