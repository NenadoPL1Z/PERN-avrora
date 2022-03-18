import React from 'react';
import {useHomeAvroraStyle} from "./style";
import Container from "../../AnyPage/Container/Container";
import {Box} from "@mui/material";
import ButtonUI from "../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import LinkUI from "../../../UI/ComponentsUI/LinkUI/LinkUI";
import AvroraContact from "../../AnyPage/AvroraContact/AvroraContact";

const HomeAvrora = () => {

    const {
        sxButton,
        TitleMUI,
        ContactMUI,
        WrapperMUI,
        ContainerMUI,
    } = useHomeAvroraStyle();

    return (
        <ContainerMUI>
            <Container>
                <WrapperMUI>
                    <TitleMUI>
                        Новостной портал
                        <br/> <Box component='span'>Аврора</Box>
                    </TitleMUI>
                    <LinkUI href='/news'>
                        <ButtonUI sx={sxButton}>
                            Читать новости
                        </ButtonUI>
                    </LinkUI>
                    <ContactMUI>
                        Информация о нас:
                        <AvroraContact/>
                    </ContactMUI>
                </WrapperMUI>
            </Container>
        </ContainerMUI>
    )
        ;
};

export default React.memo(HomeAvrora);
