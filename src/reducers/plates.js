import Immutable from 'immutable';

// Reducer
export default function reducer(state = Immutable.Map(), action = {}) {
  switch (action.type) {
    default:
        return Immutable.Map({
            colors: Immutable.List(['#b4d455', 'aliceblue', 'brown'])
        });
  }
}