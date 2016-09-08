import { OrderedMap } from 'immutable'


export function arrayToMap(array, RecordModel) {
    return array.reduce((acc, item) => {
        return acc.set(item.id, new RecordModel(item))
    }, new OrderedMap({}))
}