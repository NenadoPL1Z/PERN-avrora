import {styled} from '@mui/material'

export const useNewsIdDateStyles = () => {

    const DateBox = styled('div')(({theme}) => ({
        textAlign: 'right',
    }))

    const Date = styled('time')(({ theme }) => ({
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
        color: '#ff6505',
    }));
    
    return {
        Date,
        DateBox,
    }
}