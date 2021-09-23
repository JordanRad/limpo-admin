export const reducer =(state,action)=>{
    switch(action.type){
        case "update search input":
            return { ...state,input:action.payload}

        case "update status filter":
            return {...state, statusFilter:action.payload}
            
        case "user authenticated":
            console.log("loggedin")
            return {...state, isLoggedIn:true}

        case "user logout":
            return {...state, isLoggedIn:false}
            
        default:
            return state;
    }
}