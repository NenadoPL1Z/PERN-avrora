import {useMemo, useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const useTextFieldPasswordUI = () => {
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    const viewType = useMemo(() => viewPassword ? 'text' : 'password', [viewPassword])
    const viewIcon = useMemo(() => viewPassword ? VisibilityIcon : VisibilityOffIcon, [viewPassword])

    const handleChangeViewPassword = () => {
        setViewPassword(!viewPassword)
    }

    return {
        viewIcon,
        viewType,
        handleChangeViewPassword,
    }
};
