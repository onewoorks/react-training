const initialState = {
    username: 'iwang',
    password: '1234'
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN'){
        return {
            username: action.username,
            password: action.password
        }
    }
    return state
}

export default reducer