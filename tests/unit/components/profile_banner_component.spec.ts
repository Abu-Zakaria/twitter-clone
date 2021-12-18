import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ProfileBannerComponent from "@/components/ProfileBannerComponent.vue";
import UserBannerInfo from "@/models/components/UserBannerInfo";

describe("ProfileBannerComponent", () => {
  it("renderes data properly", () => {
    const userModel = new UserBannerInfo();
    userModel.name = "Jakaria";
    userModel.description = "Testing Component";

    const wrapper = shallowMount(ProfileBannerComponent, {
      props: {
        user: userModel,
      },
    });

    expect(wrapper.text()).to.contain("Jakaria");
    expect(wrapper.text()).to.contain("Testing");
  });
});
