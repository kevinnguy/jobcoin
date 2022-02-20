import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { AuthProvider } from './auth/useAuth';
import { Router } from './screens/Router';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
