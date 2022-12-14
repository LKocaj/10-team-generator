const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Helga", 1, "test@test.com", testValue, "engineer");
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Helga", 1, "test@test.com", "GitHubUser", "engineer");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Helga", 1, "test@test.com", testValue, "engineer");
  expect(e.getGithub()).toBe(testValue);
});