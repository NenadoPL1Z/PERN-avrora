import {useState} from "react";

export const useVoting = () => {
    const [startVote, setStartVote] = useState<boolean>(false);

    const handleStartVote = () => setStartVote(true);

    return {
        startVote,
        handleStartVote
    }
}
