// create an app from scratch
// display 2 paragraph html elements
// the paragraphs should say:
// created by your name
// copyright current year

function Challenge2() {
  const currentYear = new Date().getFullYear();
  const lName = "Churu";
  const fName = "Charles";
  return (
    <div>
      <p>
        Created by {fName} {lName}{" "}
      </p>
      <p>copyright {currentYear}</p>
    </div>
  );
}

export default Challenge2;
