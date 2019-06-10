export class Contact{
    public selected:boolean=false
    constructor(
        public id:number=null,
        public name:string='',
        public email:string='',
        public phone:string='',
        public category:string='',
        public imageData:string=''
    )
    {}
}

export enum ContactEnum {
    Family = 1,
    Friend = 2,
    Professional = 3
}
