import React, {FC} from 'react';
import {IVoteItem} from "../../../../models/IVoteModel";
import {FormControlLabel, Radio} from "@mui/material";
import RadioUI from "../../../../UI/ComponentsUI/RadioUI/RadioUI";

interface IVoteCheckboxProps {
    voteItem: IVoteItem,
}

const VoteCheckbox: FC<IVoteCheckboxProps> = ({voteItem}) => {

    return (
        <FormControlLabel
            label={voteItem.title}
            value={JSON.stringify(voteItem)}
            control={<Radio/>}
        />
    );
};

export default VoteCheckbox;
