import React, {FC} from 'react';
import {Box, TextField} from "@mui/material";
import {useTextFieldUIStyles} from "./style";
import {Controller} from 'react-hook-form'
import {useTextFieldUI} from "./useTextFieldUI";
import {TextFieldUIProps} from "./type";


const TextFieldUI: FC<TextFieldUIProps> = (props) => {

    const styles = useTextFieldUIStyles()

    const {
        sx,
        defaultValue,
        isIcon,
        IconComponent,
        iconClick,
        handleChangeInput
    } = useTextFieldUI(props)

    const {
        controller: {name, control},
        required = false,
        errorMessage = '',
        pattern = ''
    } = props

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field: {value, onChange}, fieldState: {error,}}) => (
                <Box sx={styles.inputContainer}>
                    <TextField
                        value={value}
                        onChange={
                            (e) => {
                                handleChangeInput(e.target.value, name, onChange, !!error, pattern)
                            }
                        }
                        defaultValue={value}
                        size='small'
                        {...props.textField}
                        sx={[styles.input, sx, !!error ? styles.inputError : {}]}
                        helperText={
                            error ? error.message ? error.message : errorMessage : ''
                        }
                    />
                    {!!(isIcon && value.length)  && (
                        <Box sx={styles.icon} onClick={iconClick}>
                            <IconComponent/>
                        </Box>
                    )}
                </Box>
            )}
            rules={{required: required}}
        />
    );
};

export default TextFieldUI;
