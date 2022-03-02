export const useAuthorizationStyles = () => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    form: {
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#1e1e1e',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px black',
    },
    formTitle: {
        fontSize: '30px',
        marginBottom: '10px',
        color: '#ffffff',
        fontWeight: 500
    },
    formAuthTitle: {
        fontSize: '28px',
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 500,
        marginBottom: '10px'
    },
    input: {
        marginBottom: '15px'
    },
    inputTwo: {
        marginBottom: '10px'
    },
    button: {
        marginTop: '5px',
        backgroundColor: '#2e2e2e',
        '&:hover': {
            backgroundColor: '#626262'
        }
    },
    resetPassword: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    error: {
        fontSize: '16px',
        fontWeight: 500,
        color: '#ff3d3d',
        marginBottom: '5px'
    }
});
