import { Auth, AuthUser } from "../interfaces/interfaces";


type AuthActions =
    { type: 'authLogin', payload: AuthUser } |
    { type: 'authCheckingFinish' } |
    { type: 'authLogout' }

export const AuthReducer = (state: Auth, action: AuthActions): Auth => {
    switch (action.type) {
        case 'authLogin':
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case 'authCheckingFinish':
            return {
                ...state,
                checking: false
            }
        case "authLogout":
            return {
                uid: '', name: '', checking: false
            }

        default:
            return state;
    }
}