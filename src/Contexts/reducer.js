export const initialState={
    data:{
        pos_ref_id: '2',
    fist_name: '',
    last_name: '',
    gender: '',
    contact: '',
    email: '',
    group_ref_id: 1
    },
    userDataContext:[]
};

export const reducer=(state , action)=>{
    switch (action.type) {
        case 'userDataContext':
            return {...state, userDataContext: action.payload}
            
    
        default:
            return state;
    }
}