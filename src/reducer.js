const reducer = (state, action) =>{
    switch(action.type){
        case 'add':
            return {
                ...state,
                count : state.count +1
            }
                
        case 'suppr':
            return {
                ...state,
                count : state.count -1
            }

        default:
            return state;
    }
}

export {reducer}