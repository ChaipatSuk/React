import { NavReviewProfile } from ".";

export default {
  title: "Components/NavReviewProfile",
  component: NavReviewProfile,
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
