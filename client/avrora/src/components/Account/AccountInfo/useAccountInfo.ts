import {ChangeEvent} from "react";

export interface IUserAvatarChange {
    file: FileList[0],
    base64: string
}

export const useAccountInfo = () => {
    const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>, onChange: (value: IUserAvatarChange) => void) => {
        const {files} = e.target
        const file = Array.from(files as FileList)[0];
        if (file.type.match('image/')) {
            const reader = new FileReader();

            reader.onload = (ev) => {
                if (ev.target) {
                    const result = ev.target.result

                    onChange({
                        file,
                        base64: result as string
                    })
                }
            }

            reader.readAsDataURL(file);
        }
    }

    return {
        handleChangeAvatar
    }
}
