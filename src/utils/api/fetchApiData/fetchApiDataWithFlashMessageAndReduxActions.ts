import { setFlashMessageAction } from 'redux/actionCreators/actions';

interface FetchParams {
  body?: any;
  headers?: {};
  method: string;
}

type dispatchParam = (data: {}) => void;

const fetchApiDataWithFlashMessageAndReduxActions = async (url: string, { method, body, ...settings }: FetchParams, dispatch: dispatchParam) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: method ? method : body ? 'POST' : 'GET',
    ...settings,
    headers: {
      ...headers,
      ...settings.headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(`/api/${url}`, config);
  const data = await response.json();

  if (data?.items?.errors) {
    dispatch(setFlashMessageAction('error', data.items.errors));
  }

  if (data && !data?.items.errors) {
    dispatch(setFlashMessageAction('success', 'saved'));
  }
  
  dispatch({ data: data, type: data.type });
};

export default fetchApiDataWithFlashMessageAndReduxActions;
