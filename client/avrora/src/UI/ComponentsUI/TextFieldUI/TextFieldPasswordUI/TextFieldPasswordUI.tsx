import React, {FC} from 'react';
import {useTextFieldPasswordUI} from "./useTextFieldPasswordUI";
import TextFieldUI from "../TextFieldUI";
import {TextFieldUIProps} from "../type";

const TextFieldPasswordUI: FC<TextFieldUIProps> = (props) => {

    const {viewType, viewIcon, handleChangeViewPassword} = useTextFieldPasswordUI()

    return (
        <TextFieldUI
            controller={props.controller}
            required={props.required}
            pattern={props.pattern}
            errorMessage={props.errorMessage}
            textField={{
                ...props.textField,
                type: viewType,
                sx: {
                    '& > div': {
                        '& > input': {
                            paddingRight: '45px'
                        },
                    },
                }
            }}
            inputIcon={{
                icon: viewIcon,
                onClickIcon: handleChangeViewPassword
            }}
        />
    );
};

export default TextFieldPasswordUI;
