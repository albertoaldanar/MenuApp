import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import Header from "../../src/components/header";

let wrapper;

describe("<Header />", () => {
  beforeAll(() => {
    wrapper = shallow(<Header>Children</Header>);
  });
  it("Header component is defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Header snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
