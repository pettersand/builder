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
    beforeEach(() => {
      jest.clearAllMocks();
    });

    const step1Data = {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "password123",
      confirmPassword: "password123",
    };

    const step2Data = {
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-01",
      country: "USA",
      gender: "Male",
      bioSex: "Male",
      isTrainer: false,
      hasTrainer: false,
      terms: true,
    };

    it("should return confirmation when registration is successful", async () => {
      (api.post as jest.Mock).mockResolvedValue({
        data: { message: "Data is valid, registration complete" },
        status: 200,
      });
      const result = await registerUser(step1Data, step2Data);
      expect(api.post).toHaveBeenCalledWith("/register_step_2/", {
        step1: step1Data,
        step2: step2Data,
      });
      expect(result).toEqual({
        message: "Data is valid, registration complete",
      });
    });

    it("should throw an error when registration fails", async () => {
      const invalidStep1Data = {
        ...step1Data,
        username: "", // Invalid username
      };

      (api.post as jest.Mock).mockRejectedValue({
        response: {
          data: { step1: { username: ["This field may not be blank."] } },
          status: 400,
        },
      });
      await expect(
        registerUser(invalidStep1Data, step2Data)
      ).rejects.toMatchObject({
        response: {
          data: { step1: { username: ["This field may not be blank."] } },
          status: 400,
        },
      });
    });

    it("should throw an error when step2Data is invalid", async () => {
      const invalidStep2Data = {
        ...step2Data,
        firstName: "", // Invalid first name
      };

      (api.post as jest.Mock).mockRejectedValue({
        response: {
          data: { step2: { firstName: ["This field may not be blank."] } },
          status: 400,
        },
      });

      await expect(
        registerUser(step1Data, invalidStep2Data)
      ).rejects.toMatchObject({
        response: {
          data: { step2: { firstName: ["This field may not be blank."] } },
          status: 400,
        },
      });
    });

    it("should throw an error when API returns a server error", async () => {
      (api.post as jest.Mock).mockRejectedValue({
        response: {
          data: { message: "Internal Server Error" },
          status: 500,
        },
      });

      await expect(registerUser(step1Data, step2Data)).rejects.toMatchObject({
        response: {
          data: { message: "Internal Server Error" },
          status: 500,
        },
      });
    });
  });

  describe("logoutUser", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should successfully logout the user", async () => {
      (api.post as jest.Mock).mockResolvedValue({ status: 200 });
      const result = await logoutUser();
      expect(result.status).toEqual(200);
    });
  });

  describe("checkAuthentication", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("should return auth status", async () => {
      (api.post as jest.Mock).mockResolvedValue({
        data: { isAuthenticated: true },
        status: 200,
      });
      const result = await checkAuthentication();
      expect(result.data.isAuthenticated).toBe(true);
    });
  });
});
