import React from 'react';
import {useSelector} from 'react-redux';
import MainStack from '@routes/stacks/mainStack';
import AuthStack from '@routes/stacks/authStack';

const Routes = () => {
  const {user} = useSelector((state: any) => state.root.user);

  return <>{user ? <MainStack /> : <AuthStack />}</>;
};

export default Routes;
