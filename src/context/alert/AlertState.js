// import React, { useReducer } from 'react';
// import AlertContext from './AlertContext';
// import AlertReducers from './AlertReducers';
// import { SET_ALERT, REMOVE_ALERT } from '../types';
// const AlertState = (props) => {
//   const initialState = null;
//   const [state, dispatch] = useReducer(AlertReducers, initialState);

//   // ...............Get all user data from Github API..................
//   const setAlert = (msg, type) => {
//     dispatch({
//       type: SET_ALERT,
//       payload: { msg, type },
//     });
//     setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
//   };

//   return (
//     <AlertContext.Provider
//       value={{
//         alert: state,
//         setAlert,
//       }}
//     >
//       {props.children}
//     </AlertContext.Provider>
//   );
// };

// export default AlertState;

import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './AlertReducers';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    // Remove the Alert message after 5 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
