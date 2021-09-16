import React from 'react';

// export class Useritems extends Component {
//   render() {
//     const { login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className="card text-center">
//         <img
//           src={avatar_url}
//           alt="Profile"
//           className="round-img"
//           style={{ width: '60px' }}
//         />

//         <h3>{login}</h3>
//         <a href={html_url} className="btn btn-dark btn-sm my-1">
//           Profile
//         </a>
//       </div>
//     );
//   }
// }

const Useritems = ({ user: { login, avatar_url, html_url } }) => {
  //   const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="Profile"
        className="round-img"
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        Profile
      </a>
    </div>
  );
};
export default Useritems;
