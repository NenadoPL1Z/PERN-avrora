import React from 'react';
import HomeSwiper from "../../components/Home/HomeSwiper/HomeSwiper";
import HomeTeam from "../../components/Home/HomeTeam/HomeTeam";

const Home = () => {

    return (
        <>
            <HomeSwiper/>
            <HomeTeam/>
        </>
    );
};

export default React.memo(Home);
