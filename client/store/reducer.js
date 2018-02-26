import { SET_HAIKU } from './actions'

const initialState = {
  haikus: [
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
    { line1: 'The rain clouds move west',  line2: 'pursuing the evening sun', line3: 'as I test my code' },
  ],
  selectedHaiku: {}
};

// Remember that reducers take in two parameters:
//  1. The (previous) state. When we use 'createStore', the previous state is undefined,
//     so, the reducer is initially invoked with undefined as the first argument.
//     This means that if we set a default parameter value, we can use that as our initial return value
//
//  2. The action object, which we get whenever we use `store.dispatch`

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HAIKU:
      return Object.assign({}, state, { selectedHaiku: action.haiku })
    default:
      return state
  }
}
