import {styled} from '@mui/material'

export const useNewsItemStyles = () => {
    const Item = styled('div')(({ theme }) => ({
        width: '32%',
        height: '150px',
        marginBottom: '20px',
        marginRight: '20px',
        borderRadius: '5px',
        backgroundColor: '#1e1e1e',
        cursor: 'pointer',
        transition: '.2s all linear',
        display: 'flex',
        flexDirection: 'row',
        '&:hover': {
            boxShadow: '0 0 10px'
        },
    }));

    const Img = styled('div')(({ theme }) => ({
        width: '150px',
        minWidth: '150px',
        overflow: 'hidden',
        marginRight: '5px',
        borderRadius: '5px 0 0 5px',
    }));


    const Text = styled('div')(({ theme }) => ({
        width: '100%',
        maxWidth: 'calc(100% - 155px)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    }));


    const Title = styled('div')(({ theme }) => ({
        fontSize: '20px',
        lineHeight: '20px',
        fontWeight: 500,
        color: 'orange',
        marginBottom: '5px',
        wordWrap: 'break-word',
        [theme.breakpoints.down(1280)]: {
            fontSize: '18px',
            lineHeight: '20px',
        }
    }));


    const Subtitle = styled('div')(({ theme }) => ({
        fontSize: '14px',
        lineHeight: '16px',
        fontWeight: 400,
        flexGrow: 1,
        wordWrap: 'break-word',
        [theme.breakpoints.down(1280)]: {
        }
    }));

    const Date = styled('div')(({ theme }) => ({
        textAlign: 'right',
        fontSize: '13px'
    }));

    return {
        Item,
        Img,
        Text,
        Title,
        Subtitle,
        Date
    }
}
