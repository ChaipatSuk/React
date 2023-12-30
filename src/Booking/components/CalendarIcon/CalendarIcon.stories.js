import { CalendarIcon } from ".";

export default {
  title: "Components/CalendarIcon",
  component: CalendarIcon,
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
