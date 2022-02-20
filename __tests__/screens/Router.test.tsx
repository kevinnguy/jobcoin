/* eslint-disable no-labels */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// jest-fetch-mock could be used
// @testing-library/react-native can be used

import { Router } from '../../src/screens/Router';

jest.mock('react-native-chart-kit', () => {
  LineChart: () => {};
});

describe('SignIn screen', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders sign in screen if no user', () => {
    jest.mock('../../src/auth/useAuth.tsx', () => {
      useAuth: () => ({
        user: undefined,
      });
    });

    const component = renderer.create(<Router />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders send screen if user exists', () => {
    jest.mock('../../src/auth/useAuth.tsx', () => {
      useAuth: () => ({
        user: 'abc123',
      });
    });

    const component = renderer.create(<Router />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
