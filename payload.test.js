  const payload = require("./payload");

  test("Creates at least age correctly in payload", () => {
      expect(payload("glenn", "Bech", 44, "DevOps").age).toBe(4);
  });

  test("Creates at least age correctly in payload", () => {
      expect(payload("glenn", "Bech", 45, "DevOps").age).toBe(45);
  });