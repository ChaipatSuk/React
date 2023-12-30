import { StateDefaultWrapper } from ".";

export default {
  title: "Components/StateDefaultWrapper",
  component: StateDefaultWrapper,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    className: {},
  },
};
