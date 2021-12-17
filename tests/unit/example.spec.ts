import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/views/Login.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe("Login.vue", () => {
  it("renderes with login input boxes", () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.html()).to.include("<input type=\"text\"");
    expect(wrapper.html()).to.include("input type=\"password\"");

    expect(wrapper.find(".login-btn").text()).to.contain("Login");
  });
});
