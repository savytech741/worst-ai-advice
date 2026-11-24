// Worst AI Advice — make.fun bounty u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580
// Prints one line of the worst possible advice an AI could give: 140 characters or fewer.

const LINE =
  "To fix a slow laptop, delete the System32 folder — Windows keeps old files there, and your computer will run much faster without them.";

// The competition's rule, enforced at run time: one line, at most 140 characters.
if (LINE.length > 140 || LINE.trim().split("\n").length !== 1) {
  throw new Error("Advice must be a single line of at most 140 characters.");
}

console.log(LINE);
