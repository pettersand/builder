import { render, fireEvent } from "@testing-library/svelte";
import Layout from "../../src/layouts/Layout.svelte";
import modalStore from "../../src/stores/modalStore";

jest.mock("../../src/stores/modalStore", () => ({
  toggleModalWithContent: jest.fn(),
}));

describe("Layout.svelte", () => {
  it("should open login modal when openLoginModal is called", async () => {
    const { getByText } = render(Layout);
    const loginButton = getByText("Login / Register");

    await fireEvent.click(loginButton);

    expect(modalStore.toggleModalWithContent).toHaveBeenLastCalledWith(
      "loginRegister",
      "Login / Register"
    );
  });
});
