export default store => next => action => {
    const { generateRandomId, ...rest } = action
    if (!generateRandomId) return next(action)

    next({
        ...rest,
        randomId: Date.now()
    })
}