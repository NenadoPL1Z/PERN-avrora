export const useHeaderNavigationStyle = () => (
    {
        navigation: {},
        list: {
            display: 'flex',
            alignItems: 'center',
            '& > *:last-child': {
                marginRight: 0
            }
        },
    }
);
