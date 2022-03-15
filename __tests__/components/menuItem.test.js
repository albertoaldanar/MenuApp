import { Text } from "react-native";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import MenuItem from "../../src/components/menuItem";

let wrapper;

describe("<MenuItem />", () => {
  beforeAll(() => {
    const props = {
      menuItem: {
        description: "Test menu description",
        name: "Test restaurant",
        price: 50,
      },
    };

    wrapper = shallow(<MenuItem {...props} />);
  });
  it("MenuItem component is defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Menu item renders 3 Text elements correctly. Name, description and price", () => {
    expect(wrapper.find(Text)).toHaveLength(3);
  });
  it("Menu Item snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
