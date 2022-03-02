export const useLoadingUserStyles = () => ({
    modal: {
        '& > .MuiDialog-container' :{
            '& > div': {
                backgroundColor: '#121212'
            }
        }
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    spinner: {
        width: '100px !important',
        height: '100px !important',
        color: 'orange',
        animationDuration: '0.7s'
    }
});
