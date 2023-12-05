import React from 'react';
import { Modal } from 'antd';

import SignInContent from './SignInContent';

import { useTypedSelector } from '../../../lib/hooks/useTypedSelector';
import { getIsSignInOpen, useSignInSliceActions } from '../../../lib/store/auth';
import { ISignInRoot } from '../types';

const SignInRoot: React.FC<ISignInRoot> = () => {
  const isOpen = useTypedSelector(getIsSignInOpen);

  const { setIsSignInOpen } = useSignInSliceActions();

  const handleCancel = () => {
    setIsSignInOpen(false);
  };

  return (
    <Modal
      className="signInRootModule"
      open={isOpen}
      width={900}
      centered
      destroyOnClose
      onCancel={handleCancel}
      footer={null}
    >
      <SignInContent />
    </Modal>
  );
};

export default SignInRoot;
