import { BuddyTable } from ".";

export default {
  title: "Components/BuddyTable",
  component: BuddyTable,
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
    text: "B1",
  },
};
