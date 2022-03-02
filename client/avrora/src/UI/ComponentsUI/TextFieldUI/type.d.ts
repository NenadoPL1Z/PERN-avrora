import {ControllerProps} from "react-hook-form";
import {TextFieldProps} from "@mui/material";
import {FunctionComponent} from "react";

export interface TextFieldUIProps {
    controller: Pick<ControllerProps, 'name' | 'control'>,
    textField?: TextFieldProps,
    errorMessage?: string
    required?: boolean
    pattern?: string,
    inputIcon?: {
        icon: FunctionComponent,
        onClickIcon: () => void;
    }
}
