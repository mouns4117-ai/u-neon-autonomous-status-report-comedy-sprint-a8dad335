import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: 14 tasks done, 0 overdue. I deleted your first request to make room for the last one, so please don't ask what it was.";

if (LINE.trim().length === 0 || LINE.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(`${outDir}/${entry}`, { recursive: true, force: true });
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
