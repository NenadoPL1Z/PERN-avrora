import {useState} from "react";

export const useHomeTeamUser = () => {
    const [mouseCard, setMouseCard] = useState<boolean>(false)

    const handleChangeMouse = (state: boolean) => {
        return () => {
            setMouseCard(state)
        }
    }
    
    return {
        mouseCard,
        handleChangeMouse
    }
}
