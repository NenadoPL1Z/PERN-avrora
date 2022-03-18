import React, {FC} from 'react';
import {useNewsItemStyles} from "./style";
import {useCustomRouter} from "../../../hook/useCustomRouter";
import ImageUI from "../../../UI/ComponentsUI/ImageUI/ImageUI";
import {rusDate, splitString} from "../../../services/services";
import PlaceholderImg from "../../AnyPage/PlaceholderImg/PlaceholderImg";

interface NewsItemProps {
    id: number,
    title: string,
    date: string,
    subtitle: string | null,
    img: string | null
}

const NewsItem: FC<NewsItemProps> = ({id, title, subtitle, img, date}) => {

    const {Item, Img, Date, Text, Title, Subtitle} = useNewsItemStyles()
    const {pushTo} = useCustomRouter()


    return (
        <Item
            onClick={pushTo(`/news/${id}`)}
        >
            <Img>
                {img && <ImageUI img={img}/>}
                {!img && <PlaceholderImg/>}
            </Img>
            <Text>
                <Title>
                    {splitString(title, 36)}
                </Title>
                <Subtitle>
                    {subtitle && splitString(subtitle, 73)}
                </Subtitle>
                {date && (
                    <Date>
                        Размещено: {rusDate(date)}
                    </Date>
                )}
            </Text>
        </Item>
    );
};

export default React.memo(NewsItem);
