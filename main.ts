import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry #187 "The First Mango": a childhood memory of climbing for the first mango.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = "I climbed the mango tree with sap sticking to my hands, and the first mango fell before I could catch it, splitting open on the ground where we ate it anyway, laughing with sticky chins.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
