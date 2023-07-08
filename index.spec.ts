import { assert } from "console";
import pdf2text from "./index.js";

async function test() {
  const pages = await pdf2text("test/f1040.pdf");

  assert(pages.length === 2, "Expected 2 pages");
  assert(
    pages[0].includes("Department of the Treasury—Internal Revenue Service"),
    "Expected first page to contain 'Department of the Treasury—Internal Revenue Service'"
  );
  assert(
    pages[1].includes("Estimated tax penalty"),
    "Expected second page to contain 'Estimated tax penalty'"
  );

  console.log("All tests passed");
}

test()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
