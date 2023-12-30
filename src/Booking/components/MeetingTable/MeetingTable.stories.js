import { MeetingTable } from ".";

export default {
  title: "Components/MeetingTable",
  component: MeetingTable,
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
    text: "M1",
  },
};