import React, { useContext } from 'react';
import { Spinner } from '../layout/Spinner';
import Useritems from './Useritems';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// export class User extends Component {
//   state = {
//     users: [
//       {
//         id: '1',
//         login: 'mojombo',
//         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//         html_url: 'https://github.com/mojombo',
//       },
//       {
//         id: '2',
//         login: 'defunkt',
//         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//         html_url: 'https://github.com/defunkt',
//       },

//       {
//         id: '3',
//         login: 'pjhyett',
//         avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//         html_url: 'https://github.com/pjhyett',
//       },
//     ],
//   };

const User = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Useritems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

User.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default User;
