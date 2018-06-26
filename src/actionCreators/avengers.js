import actionsTypes from '@/constants/actionsTypes';

function fetchAvengers() {
  return {
    type: actionsTypes.AVENGERS_FETCH_REQUEST,
  };
}

export default {
  fetchAvengers,
};
