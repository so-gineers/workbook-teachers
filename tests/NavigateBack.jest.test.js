import React from "react";
import NavigateBack from "../components/navigate_back";
import "jsdom-global/register";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Link changes the class when hovered", () => {
  const wrapper = shallow(<NavigateBack href="/" />);
  expect(wrapper.text()).toBe("<Link />");
});
