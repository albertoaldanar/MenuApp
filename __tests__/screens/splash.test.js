import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MockData from "../mockData.json";

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import Splash from "../../src/screens/splash";

let wrapper;

describe("<Splash />", () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    const store = mockStore({
      MockData,
    });

    wrapper = shallow(
      <Provider store={store}>
        <Splash />
      </Provider>
    ).dive();
  });

  it("Splash component is defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Splash snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
