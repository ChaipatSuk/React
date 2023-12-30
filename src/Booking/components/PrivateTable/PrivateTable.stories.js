import { PrivateTable } from ".";

export default {
  title: "Components/PrivateTable",
  component: PrivateTable,
  argTypes: {
    stateProp: {
      options: ["click", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "click",
    className: {},
    divClassName: {},
    text: "P1",
  },
};
