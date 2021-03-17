const FORM_SAVED = 'first_step/save';
const COMPONENT_UNMOUNT = 'first_step/unmounted';

const formSaved = () => ({
  type: FORM_SAVED,
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT,
});

export const saveForm = (data) => (dispatch, getState) => {
  console.log('data', data)
  console.log('getState()', getState())

  dispatch(formSaved());
  // ім’я, прізвище, посаду, телефон та email.
}

export const unmountFirstStep = () => (dispatch) => {
  dispatch(unmounted());
}

const initialState = {
  isCompleted: false,
  stepData: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_SAVED:
      return {
        ...state,
        isCompleted: true,
      }
    case COMPONENT_UNMOUNT:
      return initialState
    default:
      return state
  }
}

export default reducer;