interface IdataInput{
    label:string,
        type:string,
        id:string,
        name: string,
}
export const inputData:IdataInput[] = [
    {
        label:'Email',
        type:'email',
        id:'email',
        name:'email',
    },
    {
        label:'password',
        type:'password',
        id:'pass',
        name:'pass',
    }
]