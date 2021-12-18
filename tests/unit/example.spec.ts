import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

describe("Login.vue", () => {
  it("renderes with login input boxes", () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.html()).to.include("<input type=\"text\"");
    expect(wrapper.html()).to.include("input type=\"password\"");

    expect(wrapper.find(".login-btn").text()).to.contain("Login");
  });
});
