// plates.js

// Actions
// const LOAD   = 'my-app/widgets/LOAD'; example action

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
        return {
            colors: ['#b4d455', 'aliceblue', 'brown']
        };
  }
}

// Action Creators
// example action:
// export function loadWidgets() {
//   return { type: LOAD };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc