import { NavReviewLogin } from ".";

export default {
  title: "Components/NavReviewLogin",
  component: NavReviewLogin,
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
