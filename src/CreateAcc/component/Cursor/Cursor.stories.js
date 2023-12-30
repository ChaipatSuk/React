import { Cursor } from ".";

export default {
  title: "Components/Cursor",
  component: Cursor,
  argTypes: {
    property1: {
      options: ["invisible", "visible"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "invisible",
    className: {},
    cursorClassName: {},
    cursor:
      "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/vector-4-9@2x.png",
  },
};
