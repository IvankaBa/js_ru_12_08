export default store => next => action => {
    console.log('before action', store.getState())
    console.log('dispatching', action)
    next(action)
    //next({...action, foo: 'bar'})
    console.log('after action', store.getState())
}