import createReducer from '../../util/createreducer';

const actionTypes = {
  userFetchError: 'USER_FETCH_ERROR',
};

export default createReducer({ user: null, error: null, token: null }, {
  [actionTypes.userFetchError]: (state, action) => ({ ...state, user: null, error: action.error }),
});
