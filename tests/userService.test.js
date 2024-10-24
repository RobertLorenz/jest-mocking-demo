const { getUserFullName, getAllUsers } = require('../userService');
const { fetchUserData } = require('../api');

jest.mock('../api');

describe('User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getUserFullName should return full name', async () => {
    fetchUserData.mockResolvedValue({
      name: { first: 'John', last: 'Doe' },
    });

    const fullName = await getUserFullName(1);
    expect(fetchUserData).toHaveBeenCalledWith(1);
    expect(fullName).toBe('John Doe');
  });

  test('getAllUsers should return all user full names', async () => {
    fetchUserData
      .mockResolvedValueOnce({ name: { first: 'John', last: 'Doe' } })
      .mockResolvedValueOnce({ name: { first: 'Jane', last: 'Smith' } });

    const users = await getAllUsers();
    expect(fetchUserData).toHaveBeenCalledTimes(2);
    expect(users).toEqual(['John Doe', 'Jane Smith']);
  });
});
