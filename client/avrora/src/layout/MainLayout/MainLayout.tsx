import React, {FC} from 'react';
import Header from "../../components/AnyPage/Header/Header";
import Footer from "../../components/AnyPage/Footer/Footer";
import Main from "../../components/AnyPage/Main/Main";
import Theme from "../../theme/Theme";
import Container from "../../components/AnyPage/Container/Container";
import {useUserContext} from "../../context/UserContext/UserContext";
import LoadingUser from "../../components/AnyPage/LoadingUser/LoadingUser";

interface MainLayoutProps {
    children: React.ReactChildren | React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {

    const {isLoading} = useUserContext()

    return (
        <Theme>
            {isLoading && (
                <LoadingUser/>
            )}
            {!isLoading && (
                <>
                    <Header/>
                    <Main>
                        <Container>
                            {children}
                        </Container>
                    </Main>
                    <Footer/>
                </>
            )}
        </Theme>
    );
};

export default MainLayout;
