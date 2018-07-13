export interface IBlog {
    id?: number;
    name?: string;
    handle?: string;
    user?: number;
    userLogin?: string;
    userId?: number;
}

export class Blog implements IBlog {
    constructor(
        public id?: number,
        public name?: string,
        public handle?: string,
        public user?: number,
        public userLogin?: string,
        public userId?: number
    ) {}
}
