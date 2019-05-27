const initialState = {
    user_id: null,
    username: null,
    first_name: null,
    authenticated: false,
}

export default function reducer(state = initialState,action) {
    const {type} = action
    switch(type) {
        default:
        return state
    }
}