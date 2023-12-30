import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    property1: {
      options: ["click", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "click",
    className: {},
    text: "First name",
    frameClassName: {},
  },
};
