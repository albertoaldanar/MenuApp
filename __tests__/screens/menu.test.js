import { FlatList } from "react-native";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import React from "react";
import MockData from "../mockData.json";
import Menu from "../../src/screens/menu";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe("<Menu />", () => {
  beforeAll(() => {
    const mockStore = configureMockStore();
    const store = mockStore({
      MockData,
    });

    wrapper = shallow(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
  });
  it("Menu component is defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Menu screen renders two Flatlist elemnts correctly", () => {
    expect(wrapper.find(FlatList)).toHaveLength(2);
  });

  it("Menu snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});