import {createStore} from 'redux';

let store = createStore(spokesman);

store.subscribe(() => {
    this.setState((prevState) => {
        const storeState = this.props.store.getState();
        return {statement: storeState.statement}
    });
});