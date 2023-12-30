import { HeaderNavProfile } from ".";

export default {
  title: "Components/HeaderNavProfile",
  component: HeaderNavProfile,
  argTypes: {
    property1: {
      options: ["l-profile"],
      control: { type: "select" },
    },
    property2: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "l-profile",
    property2: "default",
    className: {},
    menuVectorClassName: {},
    stateDefaultWrapperStateDefaultClassName: {},
  },
};
