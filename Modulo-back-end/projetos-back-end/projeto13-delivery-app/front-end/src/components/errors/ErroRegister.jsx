import React from 'react';
import PropTypes from 'prop-types';

function ErrorRegister({ message }) {
  return (
    <p data-testid="admin_manage__element-invalid-register">
      { message }
    </p>
  );
}
// src = https://github.com/tryber/sd-010-b-project-delivery-app/pull/46/commits/cd993d64d8179f5fc02d06b9103eb70c5322937f

export default ErrorRegister;

ErrorRegister.propTypes = {
  message: PropTypes.string.isRequired,
};
