export const useTextFieldUIStyles = () => ({
    inputContainer: {
        position: 'relative'
    },
    input: {
        display: 'block',
        outline: 'none',
        width: '100%',
        '& > div': {
            width: '100%',
            '& > input': {
                borderRadius: '10px',
                color: '#ffffff',
                paddingRight: '45px'
            },
            '& > fieldset': {
                borderColor: '#ffffff !important',
            },
        },
        '& > p': {
            color: '#ff2121',
            marginLeft: 0
        },
        '& > label': {
            color: '#ffffff !important',
        }
    },
    inputError: {
        '& > div': {
            '& > fieldset': {
                borderColor: '#ff2121 !important',
            },
        },
    },
    label: {
       color: 'red'
    },
    icon: {
        cursor: 'pointer',
        width: '24px',
        height: '24px',
        position: 'absolute',
        right: '15px',
        top: '20px',
        transform: 'translateY(-50%)'
    }
});
