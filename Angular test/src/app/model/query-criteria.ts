
import { Theme } from './../model/theme';

export class QueryCriteria {
    constructor(
        public name: string,
        public age?: number,
        public gender?: string,
        public role?: string,
        public theme?: Theme,
        public isActive?: boolean,
        public topics?: string[],
        public toggle?: string[]
    ) { }
}
