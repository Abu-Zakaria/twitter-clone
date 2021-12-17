import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/partials/Navbar.vue";

describe("Navbar.vue", () => {
  it("renders navbar properly", () => {
    const wrapper = shallowMount(Navbar);
    expect(wrapper.html()).to.include("Home");
    expect(wrapper.html()).to.include("Message");
    expect(wrapper.html()).to.include("Notification");
  });
});
