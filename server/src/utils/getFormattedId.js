// utils/getFormattedId.js
import Counter from "../models/counter.model.js";

export async function getFormattedId(name, prefix, length = 4) {
  const counter = await Counter.findOneAndUpdate(
    { name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const padded = String(counter.seq).padStart(length, "0");
  return `${prefix}${padded}`;
}
