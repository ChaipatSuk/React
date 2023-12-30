import { SizeLStateDefaultWrapper } from ".";

export default {
  title: "Components/SizeLStateDefaultWrapper",
  component: SizeLStateDefaultWrapper,
  argTypes: {
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
    state: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "l",
    state: "default",
    className: {},
    menuVectorClassName: {},
  },
};
