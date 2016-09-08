export default store => next => action => {
    if (typeof action != 'function') return next(action)

    action(next, store.getState.bind(store))
}