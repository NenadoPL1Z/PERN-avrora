import React, {FC} from 'react';
import Header from "../../components/AnyPage/Header/Header";
import Footer from "../../components/AnyPage/Footer/Footer";
import Main from "../../components/AnyPage/Main/Main";
import Theme from "../../theme/Theme";
import Container from "../../components/AnyPage/Container/Container";
import {useUserContext} from "../../context/UserContext/UserContext";
import LoadingUser from "../../components/AnyPage/LoadingUser/LoadingUser";
import {useCustomRouter} from "../../hook/useCustomRouter";

interface MainLayoutProps {
    children: React.ReactChildren | React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {

    const {isLoading} = useUserContext()
    const {router} = useCustomRouter();
    const isHome = router.pathname === '/'

    return (
        <Theme>
            {isLoading && (
                <LoadingUser/>
            )}
            {!isLoading && (
                <>
                    <Header/>
                    <Main>
                        {isHome ? (
                            <>
                                {children}
                            </>
                        ) : (
                            <Container>
                                {children}
                            </Container>
                        )}
                    </Main>
                    <Footer/>
                </>
            )}
        </Theme>
    );
};

export default MainLayout;
