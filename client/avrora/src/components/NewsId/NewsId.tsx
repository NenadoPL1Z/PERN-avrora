import React from 'react';
import {useNewsId} from "./useNewsId";
import NewsIdTitle from "./NewsIdTitle/NewsIdTitle";
import NewsIdSubtitle from "./NewsIdSubtitle/NewsIdSubtitle";
import NewsIdSlider from "./NewsIdSlider/NewsIdSlider";
import NewsIdDate from './NewsIdDate/NewsIdDate'
import {useNewsIdStyles} from './style'
import Voting from "../AnyPage/Voting/Voting";

const NewsId = () => {

    const {news, isLoading} = useNewsId()
    const {NewsContainer, VotingContainer, NewsImgContainer} = useNewsIdStyles()

    const vote = {
        title: 'Голосование',
        voteSection: [
            {
                voteTitle: 'Что такое мечта?',
                voteOption: [
                    {
                        title: 'чекбокс 1',
                        isTrue: false
                    },
                    {
                        title: 'чекбокс 2',
                        isTrue: true
                    },
                    {
                        title: 'чекбокс 3',
                        isTrue: false
                    },
                    {
                        title: 'чекбокс 4',
                        isTrue: false
                    }
                ]
            },
            {
                voteTitle: 'Лучшее аниме 2022?',
                voteOption: [
                    {
                        title: 'берсерк',
                        isTrue: false
                    },
                    {
                        title: 'демон',
                        isTrue: false
                    },
                    {
                        title: 'аот',
                        isTrue: false
                    },
                    {
                        title: 'кукла',
                        isTrue: false
                    }
                ]
            },
        ]
    }

    return (
        isLoading ? (
            <NewsContainer>
                <NewsIdTitle title={news.title}/>
                {news.img &&  (
                    <NewsImgContainer>
                        <NewsIdSlider img={news.img}/>
                    </NewsImgContainer>
                )}
                <NewsIdSubtitle subtitle={'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.'}/>
                <VotingContainer>
                    <Voting data={vote}/>
                </VotingContainer>
                <NewsIdDate date={news.createdAt} />
            </NewsContainer>
        ) : <></>
    );
};

export default React.memo(NewsId);
