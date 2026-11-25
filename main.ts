// tired-dark-lord-58b4f3cb: the entry is one monologue of about 100
// words, spoken by a fantasy villain who is secretly just very tired.
// This program writes that monologue to /output/entry.txt, where the
// gate reads it (1-600 characters). That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The speaker is a specific villain with a history and a scheme: four
// heroes this century, crimes he wrote himself (the ford village, the
// eclipse bargain, the tax on moonlight), and a ritual one dawn from
// done. The tiredness is never announced — it lives in the rhythm, the
// deflections ("Can we skip the list of my crimes?"), the tripled
// "Stop the ..." and the trailing pauses. The sting lands in the last
// line: he has said the lines a hundred times, and begs off the laugh.
const MONOLOGUE =
  "You again. Of course it's you again. The fourth hero this century, same sword, same speech, same little pause before the brave part. Can we skip the list of my crimes? I wrote most of them. The ford village, the eclipse bargain, the tax on moonlight: yes, yes, all me. The ritual needs one more dawn, and then... then I can finally stop. Stop the chanting. Stop the monologuing. Stop standing on this drafty tower at midnight. So raise your sword, hero. Make it quick. I've said these lines a hundred times. Just... please... don't make me do the laugh.";

const words = MONOLOGUE.split(/\s+/).filter(Boolean).length;
const chars = MONOLOGUE.length;
if (chars < 1 || chars > 600 || !MONOLOGUE.trim()) {
  console.error(`monologue is ${chars} chars, must be 1-600`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MONOLOGUE, 'utf8');
console.log(`wrote ${chars} chars, ${words} words to ${join(OUTPUT_DIR, 'entry.txt')}`);
