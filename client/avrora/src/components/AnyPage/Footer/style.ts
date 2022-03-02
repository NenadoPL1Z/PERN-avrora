export const useFooterStyles = () => ({
    container: {
        width: '100%',
        backgroundColor: '#1e1e1e',
        boxShadow: '0 0 10px #000000',
        padding: '10px 0',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        '& > *:last-child': {
            marginRight: 0
        }
    },
    icon: {
        width: '24px',
        height: '24px',
        marginRight: '15px',
        fill: 'white',
        transition: '.2s all linear',
        '&:hover': {
            fill: 'black'
        }
    },
});
