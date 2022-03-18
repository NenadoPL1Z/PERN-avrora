import React, { FC } from 'react';
import { Box } from '@mui/material';
import {useNewsIdDateStyles} from './style'
import {rusDate} from '../../../services/services'

interface NewsIdDateProps {
    date: string
}

const NewsIdDate: FC<NewsIdDateProps> = ({date}) => {

    const {Date, DateBox} = useNewsIdDateStyles()

    return (
        <DateBox>
            <Date>Размещён: {rusDate(date)}</Date>
        </DateBox>
    )
}

export default NewsIdDate
