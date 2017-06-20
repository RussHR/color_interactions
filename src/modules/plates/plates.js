// plates.js

import Immutable from 'immutable';

// Actions
// const LOAD   = 'my-app/widgets/LOAD'; example action

// Reducer
export default function reducer(state = Immutable.Map(), action = {}) {
  switch (action.type) {
    default:
        return Immutable.Map({
            colors: Immutable.List(['#b4d455', 'aliceblue', 'brown'])
        });
  }
}

// Action Creators
// example action:
// export function loadWidgets() {
//   return { type: LOAD };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc