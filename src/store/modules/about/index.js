const defaultState = {
  count: 0
}

const aboutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ABOUT_ADD':
      return {
        ...state,
        count: state.count + 1
      }
    case 'ABOUT_CUT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
export default aboutReducer
