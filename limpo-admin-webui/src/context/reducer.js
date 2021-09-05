export const reducer =(state,action)=>{
    switch(action.type){
        case "update search input":
            return { ...state,input:action.payload}
        case "update status filter":
            return {...state, statusFilter:action.payload}
        default:
            return state;
    }
}