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
    menuVector:
      "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/6575d5b0ed28baa6bd577948/img/vector-4@2x.png",
    stateDefaultWrapperStateDefaultClassName: {},
  },
};
