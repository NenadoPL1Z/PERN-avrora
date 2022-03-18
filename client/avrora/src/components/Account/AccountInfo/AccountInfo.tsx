import React, {RefObject, useRef} from 'react';
import AvatarUI from "../../../UI/AvatarUI/AvatarUI";
import {useUserContext} from "../../../context/UserContext/UserContext";
import {useAccountInfoStyles} from "./style";
import ButtonUI from "../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import {Controller, useFormContext} from 'react-hook-form'
import {useAccountInfo} from "./useAccountInfo";

const AccountInfo = () => {
    const {control, watch} = useFormContext();
    const {user: {firstName, lastName}} = useUserContext()

    const {
        ContainerInfoMUI,
        ContainerButtonMUI,
        ContainerInputMUI
    } = useAccountInfoStyles();
    const {handleChangeAvatar} = useAccountInfo()

    const fileInput = useRef() as RefObject<HTMLInputElement>;

    return (
        <ContainerInfoMUI>
            <AvatarUI
                src={watch('photo')?.base64}
                firstName={firstName}
                lastName={lastName}
                customSx={{width: '80px', height: '80px'}}
            />
            <Controller
                name='photo'
                control={control}
                render={(({field: {onChange}}) => (
                    <ContainerInputMUI>
                        <input
                            ref={fileInput}
                            type='file'
                            accept="image/*"
                            onChange={(e) => handleChangeAvatar(e, onChange)}
                        />
                    </ContainerInputMUI>
                ))}
            />
            <ContainerButtonMUI>
                <ButtonUI onClick={() => fileInput.current?.click()}>
                    ИЗМЕНИТЬ ФОТО
                </ButtonUI>
            </ContainerButtonMUI>
        </ContainerInfoMUI>
    );
};

export default React.memo(AccountInfo);
