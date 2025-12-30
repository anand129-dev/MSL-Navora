import Apply from "./Apply";

export default async function ApplyJobPage({ params }) {
  const { id } = await params; // ✅ unwrap correctly

  return <Apply />;
}
