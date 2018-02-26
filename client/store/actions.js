export const SET_HAIKU = 'SET_HAIKU';

export const selectHaiku = (haiku) => {
  return {
    type: SET_HAIKU,
    haiku
  }
};
