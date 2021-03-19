const INPUT_CHANGED = 'form/changed';
const FORM_SAVED = 'form/saved';
const COMPONENT_UNMOUNT = 'form/unmounted';

const formSaved = () => ({
  type: FORM_SAVED,
});

const inputChanged = (data) => ({
  type: INPUT_CHANGED,
  payload: data
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT,
});

export const saveForm = (data) => (dispatch, getState) => {
  /* console.log('data', data)
  console.log('getState()', getState())

  dispatch(formSaved()); */
}

export const changeInput = (data) => (dispatch) => {
  console.log(dispatch)
  dispatch(inputChanged(data));
}

export const unmount = () => (dispatch) => {
  dispatch(unmounted());
}

const initialState = {
  isValid: false,
  formData: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      }
    case COMPONENT_UNMOUNT:
      return initialState
    default:
      return state
  }
}

export default reducer;