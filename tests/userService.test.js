const { getUserFullName, getAllUsers } = require("../src/userService");
const { fetchUserData } = require("../src/api");

jest.mock("../src/api");

describe("User Service", () => {
  const mockUserJohn = { name: { first: "John", last: "Doe" } };
  const mockUserJane = { name: { first: "Jane", last: "Smith" } };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getUserFullName should return the correct full name for a user", async () => {
    fetchUserData.mockResolvedValue(mockUserJohn);

    const fullName = await getUserFullName(1);

    expect(fullName).toBe("John Doe");
  });

  test("getAllUsers should return full names of all users", async () => {
    fetchUserData
      .mockResolvedValueOnce(mockUserJohn)
      .mockResolvedValueOnce(mockUserJane);

    const users = await getAllUsers();

    expect(users).toEqual(["John Doe", "Jane Smith"]);
  });
});
