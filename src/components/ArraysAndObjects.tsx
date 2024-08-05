import { useState, InputHTMLAttributes, FormEvent } from "react";

interface Car {
  year: number;
  maker: string;
  model: string;
}

interface InputChildProps extends InputHTMLAttributes<HTMLInputElement> {
  returnValue?: (value: string) => void;
}

function Input({ returnValue, ...rest }: InputChildProps) {
  return (
    <input
      onChange={(e) => returnValue && returnValue(e.target.value)}
      {...rest}
    />
  );
}

function CarForm() {
  const [cars, setCar] = useState<Car[]>([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [maker, setMaker] = useState("");
  const [model, setModel] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(cars);
  }

  function addCar() {
    const newCar = {
      year: year,
      maker: maker,
      model: model,
    };

    setCar((prevCar) => [...prevCar, newCar]);
    setYear(new Date().getFullYear());
    setMaker("");
    setModel("");
  }

  function removeCar(index: number) {
    setCar((prevCar) => prevCar.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Your car</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={maker}
          placeholder="Maker"
          returnValue={(e) => setMaker(e)}
        />
        <Input
          value={model}
          placeholder="Model"
          returnValue={(e) => setModel(e)}
        />
        <Input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <button type="submit" onClick={addCar}>
          Submit
        </button>
      </form>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.maker} {car.model} - {car.year}
            <button onClick={() => removeCar(index)}>EXCLUIR</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CarForm;
