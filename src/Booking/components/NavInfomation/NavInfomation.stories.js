import { NavInfomation } from ".";

export default {
  title: "Components/NavInfomation",
  component: NavInfomation,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
  },
};
