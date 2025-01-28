function App() {
  const fName = "charles";
  const lName = "Churu";

  const luckyNumber = Math.floor(Math.random() * 10);
  return (
    <div>
      <h1>hello {fName + " " + lName}</h1>
      <p>Your lucky Number is {luckyNumber} </p>
    </div>
  );
}

export default App;
