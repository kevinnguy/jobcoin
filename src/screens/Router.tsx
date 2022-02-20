import React from 'react';

import { SignInScreen } from './SignIn';
import { SendScreen } from './Send';

import { useAuth } from '../auth/useAuth';

/**
 * If we had more navigation states and screens, it's best to use a library
 * like react-navigation or react-native-navigation
 */
export const Router = () => {
  const auth = useAuth();

  if (auth.user) {
    return <SendScreen />;
  }

  return <SignInScreen />;
};
