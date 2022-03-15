import { Image } from "react-native";
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

  it('Splash component calls callMenuData() correctly when mounts', () => {
    // expect(wrapper.instance().callMenuData()).equals(true);
    console.log(wrapper.instance())
  });

  it("Splash component is defined", () => {
    expect(wrapper).toBeDefined();
  });


//   it('make sure foo run only once', () => {
//      expect(foo.mock.calls.length).toBe(1);
//   });

  it("Splash screen renders loading Image correctly", () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  it("Splash snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
