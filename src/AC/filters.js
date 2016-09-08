import { CHANGE_DATE_FILTER, CHANGE_SELECTED_FILTER } from '../constants'

export function changeDateFilter(dates) {
    return {
        type: CHANGE_DATE_FILTER,
        payload: { dates }
    }
}

export function changeSelectedFilter(ids) {
    return {
        type: CHANGE_SELECTED_FILTER,
        payload: { ids }
    }
}