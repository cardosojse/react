import { useState, FormEvent, InputHTMLAttributes } from "react";

type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

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

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("");
  const [shipping, setShipping] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = {
      name: name,
      quantity: quantity,
      product: product,
      shipping: shipping,
    };

    console.log(formData);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  function handleProduct(e: SelectEvent) {
    setProduct(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Your order</h2>
      <Input
        value={name}
        placeholder="Your name"
        returnValue={(e) => setName(e)}
      />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantity} type="number" />
      <p>Quantity: {quantity}</p>
      <select onChange={handleProduct}>
        <option value="">Select your pizza</option>
        <option value="Diavola">Diavola</option>
        <option value="Margherita">Margherita</option>
        <option value="Capricciosa">Capricciosa</option>
      </select>
      <p>Your pizza: {product}</p>
      <label>
        <Input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          returnValue={(e) => setShipping(e)}
        />
        Pick up
      </label>
      <br />
      <label>
        <Input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          returnValue={(e) => setShipping(e)}
        />
        Delivery
      </label>
      <p>You choose {shipping}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyComponent;
