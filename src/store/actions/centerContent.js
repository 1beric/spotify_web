import actionTypes from '../actionTypes';

export const set = (properties) => ({
  type: actionTypes.centerContent.SET,
  payload: properties,
});

export const setCurrentPage = (currentPage) => ({
  type: actionTypes.centerContent.SET_CURRENT_PAGE,
  payload: currentPage,
});

export const goBack = () => async (dispatch, getState) => {
  const { back, forward } = { ...getState().centerContent.history };
  const { currentPage } = { ...getState().centerContent };

  if (back.length === 0) return;

  const newPage = back.pop();

  dispatch(
    set({
      currentPage: newPage,
      history: {
        back: back,
        forward: [...forward, currentPage],
      },
    }),
  );
};

export const goForward = () => async (dispatch, getState) => {
  const { back, forward } = { ...getState().centerContent.history };
  const { currentPage } = { ...getState().centerContent };

  if (forward.length === 0) return;

  const newPage = forward.pop();

  dispatch(
    set({
      currentPage: newPage,
      history: {
        back: [...back, currentPage],
        forward: forward,
      },
    }),
  );
};
