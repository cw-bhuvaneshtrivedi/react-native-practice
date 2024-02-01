export const CHANGE_CITY = (city:string) => {
    return {
        type:'CHANGE_CITY',
        payload:city
    }
}

export const CHANGE_STATE = (state:string) => {
    return {
        type:'CHANGE_STATE',
        payload:state
    }
}