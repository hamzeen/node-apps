import { combineReducers } from 'redux'
import { SEARCH_SUCCESS, SEARCH_CLICKED, SEARCH_ERROR, FETCH_FORK_SUCCESS } from './../actions'
import { updateGist } from './manager'

let initialState = { gists: [] }

const gistSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CLICKED:
      return Object.assign({}, state, { loading: true, gists: [] })
    case SEARCH_SUCCESS:
      return Object.assign({}, state, { gists: action.payload, loading: false })
    case SEARCH_ERROR:
      return Object.assign({}, state, { loading: false, error: action.payload })
    case FETCH_FORK_SUCCESS:
      const newGist = updateGist(action.payload, state.gists);
      return Object.assign({}, state, { gists: newGist })
    default:
      return state
  }
}

const gistReducer = combineReducers({
  gistSearch
})

export default gistReducer
