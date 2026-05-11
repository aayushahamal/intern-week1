import Counter from "./pages/Counter";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Counter label="Daily Steps" />
    </div>
  );
}