import React from 'react';
import {NextPage} from "next";
import withAuth from '../src/components/AnyPage/withAuth/withAuth'

const Account: NextPage = () => {
    return (
        <div>
            23
        </div>
    );
};

export default withAuth(Account);
