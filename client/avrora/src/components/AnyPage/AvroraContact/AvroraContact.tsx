import React from 'react';
import {useAvroraContactStyles} from "./style";
import Phone from '@mui/icons-material/Phone';
import Room from '@mui/icons-material/Room';
import VkLogoIcon from '../../../UI/svg/vk.svg';
import LinkUI from "../../../UI/ComponentsUI/LinkUI/LinkUI";


const AvroraContact = () => {

    const {
        SocialsMUI,
        ContactItemMUI,
        ContactPhoneMUI,
        ContactAddressMUI,
        AvroraContainerMUI,
    } = useAvroraContactStyles()

    return (
        <AvroraContainerMUI>
            <ContactItemMUI>
                <Phone/>
                <ContactPhoneMUI href='tel:73512144111'>
                    +7 (351) 214-41-11
                </ContactPhoneMUI>
            </ContactItemMUI>
            <ContactItemMUI>
                <Room/>
                <ContactAddressMUI>
                    Кожзаводская ул. 1, Челябинск
                </ContactAddressMUI>
            </ContactItemMUI>
            <SocialsMUI>
                <LinkUI href='https://vk.com/studentpatrul'>
                    <VkLogoIcon/>
                </LinkUI>
            </SocialsMUI>
        </AvroraContainerMUI>
    );
};

export default AvroraContact;
