import {TextFieldUIProps} from "./type";
import {FunctionComponent} from "react";
import {useFormContext} from "react-hook-form";

export const useTextFieldUI = (props: TextFieldUIProps) => {
    const {clearErrors} = useFormContext()

    const {
        inputIcon
    } = props


    const handleChangeInput = (
        value: string,
        name: string,
        onChange: (state: string) => void,
        error: boolean,
        pattern: string
    ) => {

        const patternValue = pattern ?
            value.replace(new RegExp(pattern, ''), '') : value

        if (error) {
            clearErrors(name)
        }
        onChange(patternValue)
    }



    const sx = (props?.textField?.sx ? props?.textField?.sx : {}) as {}
    const defaultValue = props?.textField?.defaultValue ? props?.textField?.defaultValue : ''


    const isIcon = inputIcon?.icon
    const IconComponent = isIcon as FunctionComponent
    const iconClick = inputIcon?.onClickIcon


    return {
        sx,
        isIcon,
        iconClick,
        defaultValue,
        IconComponent,
        handleChangeInput,
    }
}
