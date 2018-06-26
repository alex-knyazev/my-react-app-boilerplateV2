import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  data: [],
  isWaiting: false,
  isError: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.AVENGERS_FETCH_REQUEST:
      return {
        ...state,
        isError: false,
        isWaiting: true,
      };
    case actionsTypes.AVENGERS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isWaiting: false,
        data: payload,
      };
    case actionsTypes.AVENGERS_FETCH_ERROR:
      return {
        ...state,
        isWaiting: false,
        isError: true,
      };
    default:
      return state;
  }
}
