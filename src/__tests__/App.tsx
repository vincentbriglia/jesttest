import * as React from "react";
import * as renderer from 'react-test-renderer';
import { App } from "../App";

jest.mock('NativeModules', () => ({
  RNGestureHandlerModule: {
    Directions: {},
    State: {},
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
  },
  UIManager: {
    RCTView: () => {},
  },
}));


it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
