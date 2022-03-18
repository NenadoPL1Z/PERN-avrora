export interface IVoteItem {
    title: string,
    isTrue: boolean
}

export interface IVoteSection {
    voteTitle: string,
    voteOption: IVoteItem[]
}


export interface IVoteModel {
    title: string;
    voteSection: IVoteSection[]
}
