import { FC } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

type Props = {
  setIsAuth: (data: boolean) => void;
};

export const Logout: FC<Props> = (props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};
