const crypto = require("crypto");

createDPKHash = (data) => {
  let hash = crypto.createHash("sha3-512").update(data).digest("hex");
  return hash;
}


validateCandidate = (candidate) => {
  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createDPKHash(candidate);
  }
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    candidate = event.partitionKey;
    if (!candidate) {
      const data = JSON.stringify(event);
      candidate = createDPKHash(data);
    }
  }

  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createDPKHash(candidate);
  }
  return candidate;
};