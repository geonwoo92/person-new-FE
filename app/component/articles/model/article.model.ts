

export interface IArticle{
    id?: number
    writerId? : number
    boardId?:number
    title?: string
    content?: string
    regDate? : string
    modDate? : string
    array?: IArticle[]
    json?: IArticle
    count?:number
}