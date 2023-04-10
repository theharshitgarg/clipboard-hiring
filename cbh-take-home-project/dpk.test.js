const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns const value when given empty hash input", () => {
    const trivialKey = deterministicPartitionKey({});
    const expected = crypto.createHash("sha3-512").update(JSON.stringify({})).digest("hex"); 
    expect(trivialKey).toBe(expected);

  });

  it("Returns the partitionKey when given hash input with non-empty partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "10321212"});
    expect(trivialKey).toBe("10321212");
  });

  it("Returns the partitionKey when given hash input with empty partitionKey", () => {
    const data = {partitionKey: ""};
    const stringData = JSON.stringify(data);
    const trivialKey = deterministicPartitionKey(data);
    const expected = crypto.createHash("sha3-512").update(stringData).digest("hex")
    console.log(expected);
    expect(trivialKey).toBe(expected);
  });
});
