import CurrentOpening from "./components/CurrentOpenings";
import Test from "./components/Test";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <CurrentOpening />
      <Test />
      <h1 className="font-display text-7xl text-white">Current Openings</h1>
<button className="rounded-full bg-white px-4 py-2 text-blue-600 border">
  Test Button
</button>

    </main>
  );
}
