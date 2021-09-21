// import React, { useContext } from 'react';
// import AlertContext from '../../context/alert/AlertContext';
// export const Alert = () => {
//   const alertContext = useContext(AlertContext);
//   const { alert } = alertContext;
//   return (
//     alert !== null && (
//       <div className={`alert alert ${alert.type}`}>
//         <i className="fas fa-info-circle"></i>
//         {alert.msg}
//       </div>
//     )
//   );
// };

import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

// export default Alert;
