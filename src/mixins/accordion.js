export default {
    getInitialState() {
        return {
            openItemId: null
        }
    },

    toggleOpenItem(id) {
        return ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openItemId: this.state.openItemId == id ? null : id
            })
        }
    }

}