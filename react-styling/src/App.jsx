function App() {
  const time = new Date().getHours();
  console.log("Current hour:", time);

  if (time >= 0 && time < 12) {
    console.log("Time is in the morning range.");
    return (
      <div>
        <h1 className="mor">Good morning</h1>
      </div>
    );
  } else if (time >= 12 && time < 18) {
    console.log("Time is in the afternoon range.");
    return (
      <div>
        <h1 className="aft">Good afternoon</h1>
      </div>
    );
  } else {
    console.log("Time is in the evening range.");
    return (
      <div>
        <h1 className="even">Good evening</h1>
      </div>
    );
  }
}

export default App;
