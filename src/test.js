import * as AAA from "./index";

try {
  AAA.assert(true, "This will pass");
} catch (err) {
  throw new Error("unexpected exception", err);
}

try {
  AAA.assert(false, "This will fail");
  throw new Error("assert did not fail");
} catch (err) {
  if (err.message.indexOf("This will fail") === -1) {
    throw new Error("missing expected error message");
  }
}
