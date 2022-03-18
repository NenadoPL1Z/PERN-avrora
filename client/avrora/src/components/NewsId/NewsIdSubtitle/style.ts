import {styled} from '@mui/material'

export const useNewsIdSubtitleStyles = () => {
    const Subtitle = styled('p')(({ theme }) => ({
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0px',
        wordBreak: 'break-word',
        color: '#ffffff',
        fontWeight: 400,
        marginBottom: '10px',
        paddingLeft: '5px',
    }));

    return {
        Subtitle
    }
}
