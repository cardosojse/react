import { useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Car() {
  const [car, setCar] = useState({
    company: "Ford",
    model: "Mustang",
    year: 1969,
  });

  function handleCompany(e: ChangeEvent) {
    setCar((prevCar) => ({ ...prevCar, company: e.target.value }));
  }

  function handleModel(e: ChangeEvent) {
    setCar((prevCar) => ({ ...prevCar, model: e.target.value }));
  }

  function handleYear(e: ChangeEvent) {
    setCar((prevCar) => ({ ...prevCar, year: Number(e.target.value) }));
  }

  return (
    <>
      <h2>Your car</h2>
      <p>
        {car.company} {car.model} - {car.year}
      </p>
      <label>
        Company:
        <br />
        <input type="text" value={car.company} onChange={handleCompany} />
      </label>
      <br />
      <label>
        Model:
        <br />
        <input type="text" value={car.model} onChange={handleModel} />
      </label>
      <br />
      <label>
        Year:
        <br />
        <input type="number" value={car.year} onChange={handleYear} />
      </label>
    </>
  );
}

export default Car;
