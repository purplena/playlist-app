import React from 'react';
import LinkButton from './LinkButton';

const LoginSocialMediaButton = ({ icon, mediaName }) => {
  return (
    <LinkButton disableElevation startIcon={icon}>
      Continue avec {mediaName}
    </LinkButton>
  );
};
export default LoginSocialMediaButton;
