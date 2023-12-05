import React from 'react'

import './registrationInputList.css';

import AuthInput from '../../../../../../components/AuthInput/AuthInput';

import { OnChangeEvent } from '../../../../../../lib/types/events';
import { IRegistrationState } from '../../types';

export interface IRegistrationInputList {
  registrationState: IRegistrationState;
  setRegistrationState: React.Dispatch<
    React.SetStateAction<IRegistrationState>
  >;
}

const RegistrationInputList: React.FC<IRegistrationInputList> = ({
  registrationState,
  setRegistrationState,
}) => {
  const { userName, email, password } = registrationState || {};

  const onChangeHandler = (cell: string) => (e: OnChangeEvent) => {
    setRegistrationState((prev) => ({ ...prev, [cell]: e.target.value }));
  };

  return (
    <div className='registrationInputList'>
      <AuthInput
        placeholder="Name"
        value={userName}
        onChange={onChangeHandler('userName')}
        className='auth_input'
      />
      <AuthInput
        placeholder="Email"
        value={email}
        onChange={onChangeHandler('email')}
        className='auth_input'
      />
      <AuthInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={onChangeHandler('password')}
        className='auth_input'
      />
    </div>
  );
};

export default RegistrationInputList;
