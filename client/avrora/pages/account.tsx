import React from 'react';
import {NextPage} from "next";
import withAuth from '../src/components/AnyPage/withAuth/withAuth'
import AccountPage from '../src/pages/Account/Account'

const Account: NextPage = () => <AccountPage/>;

export default withAuth(Account);
