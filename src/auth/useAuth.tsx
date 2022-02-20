import React, { useState, createContext, useContext, useEffect } from 'react';

export interface Transaction {
  timestamp: string;
  toAddress?: string;
  fromAddress?: string;
  amount: string;
}

interface User {
  address: string;
  balance: string;
  transactions: [Transaction];
}

interface IAuthContext {
  user?: User;
  signIn: (address: string) => Promise<void>;
  signOut: () => void;
  sendTransaction: (
    toAddress: string,
    amount: string,
    onSuccess: Function,
    onError: Function,
  ) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
  signIn: async () => {},
  signOut: () => {},
  sendTransaction: async () => {},
});

const API_HOST = '';
const API_GET_ADDRESS_INFO = `${API_HOST}/api/addresses`;
const API_POST_TRANSACTION = `${API_HOST}/api/transactions`;

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const signIn = async (address: string) => {
    const response = await fetch(`${API_GET_ADDRESS_INFO}/${address}`);
    const responseJson = await response.json();
    setUser({
      ...responseJson,
      address,
    });
  };

  const signOut = () => setUser(undefined);

  const sendTransaction = async (
    toAddress: string,
    amount: string,
    onSuccess: Function,
    onError: Function,
  ) => {
    if (!user?.address) {
      onError('Please sign in');
      setUser(undefined);
    }

    const response = await fetch(
      `${API_POST_TRANSACTION}?amount=${amount}&toAddress=${toAddress}&fromAddress=${user?.address}`,
      {
        method: 'POST',
      },
    );

    if (response.status === 200) {
      onSuccess();
    } else {
      const responseJson = await response.json();
      onError(responseJson.error ?? 'Please try again');
    }
  };

  useEffect(() => {
    // sign out when this unmounts
    return signOut;
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, sendTransaction, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
