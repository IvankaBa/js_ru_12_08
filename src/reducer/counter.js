import { INCREMENT } from '../constants'

export default function counterReducer(state = 0, action ) {
    const { type } = action
    return type == INCREMENT ? state + 1 : state
}
