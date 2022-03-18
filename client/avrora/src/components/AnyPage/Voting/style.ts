import {styled} from '@mui/material'

export const useVotingStyles = () => {
    const VoteContainer = styled('div')(({ theme }) => ({
        margin: '10px auto',
        width: '100%',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '24px',
        background: 'linear-gradient(145deg, #212121, #1c1c1c);',
        boxShadow: '10px 10px 40px #121212, -10px -10px 40px #1c1c1c',
        transition: '.15s all linear',
    }));

    return {
        VoteContainer,
    }
}
