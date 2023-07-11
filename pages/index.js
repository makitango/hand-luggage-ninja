import List from "./List";

export default function HomePage({ bags }) {
  return (
    <div>
      <h1>Hand luggage ninja</h1>
      <List bags={bags} />
    </div>
  );
}
