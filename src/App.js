import Expenses from "./Components/expense/Expenses";

export default function App() {
  const expenses = [
    {
      id: "a1",
      title: "Car Insurance",
      amount: 94.2,
      date: new Date()
    },
    {
      id: "a2",
      title: "Cat Insurance",
      amount: 194.2,
      date: new Date()
    },
    {
      id: "a3",
      title: "People Insurance",
      amount: 924.2,
      date: new Date()
    },
    {
      id: "a4",
      title: "House Insurance",
      amount: 9432.2,
      date: new Date()
    },
    {
      id: "a1",
      title: "Phone Insurance",
      amount: 494.2,
      date: new Date()
    }
  ];
  return (
    <div className="App">
      <h2>Started</h2>
      <Expenses items={expenses} />
    </div>
  );
}
