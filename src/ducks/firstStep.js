const SAVE_FORM = 'first_step/save';
const COMPONENT_UNMOUNT = 'first_step/unmounted';

const formSave = (formId, formData) => ({
  type: SAVE_FORM,
  payload: {
    formId,
    formData
  }
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT,
});

export const saveForm = (formId, formData) => (dispatch, getState) => {
  dispatch(formSave(formId, formData));
}

export const unmount = () => (dispatch) => {
  dispatch(unmounted());
}

const initialState = {
  personal: {
    "first_name": "",
    "last_name": "",
    "job": "",
    "phone": "",
    "email": ""
  },
  study:
    [
      {
        "title": "",
        "field_of_study": "",
        "start_date": "",
        "end_date": ""
      },
    ],
  work: [
    {
      "job_title": "",
      "company": "",
      "start_date": "",
      "end_date": ""
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        [action.payload.formId]: action.payload.formData
      }
    case COMPONENT_UNMOUNT:
      return initialState
    default:
      return state
  }
}

export default reducer;