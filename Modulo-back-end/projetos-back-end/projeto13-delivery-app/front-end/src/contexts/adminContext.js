import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AdminUsersContext = createContext();

function AdminUsersProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  const addUser = (user) => {
    setUsersList([...usersList, { ...user }]);
  };

  const removeUser = (id) => {
    const updatedList = usersList.filter((user) => user.id !== id);
    setUsersList(updatedList);
  };

  const context = {
    usersList,
    addUser,
    removeUser,
    setUsersList,
  };

  return (
    <AdminUsersContext.Provider
      value={ context }
    >
      { children }
    </AdminUsersContext.Provider>
  );
}

AdminUsersProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AdminUsersProvider;
