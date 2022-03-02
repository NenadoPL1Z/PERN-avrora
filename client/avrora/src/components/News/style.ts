export const useNewsDataStyles = () => ({
    container: {
        marginTop: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *:nth-of-type(3n)': {
            marginRight: 0
        }
    }
});
