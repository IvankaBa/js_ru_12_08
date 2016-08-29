import { FILTERED_ARTICLE } from '../constants'

export function filteredCalender(from, to) {
    return {
        type: FILTERED_ARTICLE,
        from: { from },
        to: { to }
    }
}