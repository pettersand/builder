import api from "../../src/utilities/api";
import {
  loginUser,
  registerUser,
  checkExistingUser,
  logoutUser,
  checkAuthentication,
} from "../../src/utilities/userAPI";

jest.mock("../../src/utilities/api", () => ({
  post: jest.fn(),
}));

describe("userAPI", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("loginUser", () => {
    it("should return success message when login is successful", async () => {
      (api.post as jest.Mock).mockResolvedValue({
        data: { message: "Login successful" },
        status: 200,
      });
      const payload = { username: "john_doe", password: "password123" };
      const result = await loginUser(payload);

      expect(api.post).toHaveBeenCalledWith("/login/", payload);
      expect(result).toEqual({ message: "Login successful" });
    });

    it("should throw an error when credentials are invalid", async () => {
      (api.post as jest.Mock).mockRejectedValue({
        response: {
          data: { message: "Invalid credentials" },
          status: 401,
        },
      });
      const payload = { username: "john_doe", password: "wrong_password" };
      await expect(loginUser(payload)).rejects.toMatchObject({
        response: {
          data: { message: "Invalid credentials" },
          status: 401,
        },
      });
    });

    it("should throw an error when request is bad", async () => {
      (api.post as jest.Mock).mockRejectedValue({
        response: {
          data: { message: "This field may not be blank." },
          status: 400,
        },
      });
      const payload = { username: "", password: "password123" };
      await expect(loginUser(payload)).rejects.toMatchObject({
        response: {
          data: { message: "This field may not be blank." },
          status: 400,
        },
      });
    });
  });

  describe("registerUser", () => {
    it("should return user data when registration is successful", async () => {});

    it("should throw an error when registration fails", async () => {});
  });

  describe("checkExistingUser", () => {});
  describe("logoutUser", () => {});
  describe("checkAuthentication", () => {});
});
