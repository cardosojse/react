import { useEffect, useState } from "react";

// function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");

//     useEffect(() => {
//         document.title = `My ${color} Counter Program ${count}`;
//     }, [color]);

//     function counter() {
//         setCount(prevCount => prevCount + 1)
//     }

//     function changeColor() {
//         setColor(prevColor => prevColor === "green" ? "red" : "green");
//     }

//     return (
//         <>
//             <h2 style={{color: color}}>Counter: {count}</h2>
//             <button onClick={counter}>Count</button>
//             <button onClick={changeColor}>Change color</button>
//         </>
//     )
// }

// function MyComponent() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     console.log("Added event");
//     return () => {
//         window.removeEventListener("resize", handleResize)
//     }
//   }, [width, height]);

//   useEffect(() => {
//     document.title = `Widht: ${width}px Height: ${height}px`;
//   }, [width, height]);

//   function handleResize() {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   }

//   return (
//     <>
//       <h2>Width: {width}px</h2>
//       <h2>Height: {height}px</h2>
//     </>
//   );
// }

interface Resources {
    userId: number;
    id: number;
    title: string;
    completed?: boolean;
}

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState<Resources[]>([]);

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();
      setItems(responseJSON);
      console.log(responseJSON);
    };

    fetchResourceTypes();
  }, [resourceType]);

  function changeResourceType(resourceType: string) {
    setResourceType(resourceType);
  }

  return (
    <>
      <h2>{resourceType}</h2>
      <div>
        <button onClick={() => changeResourceType("posts")}>posts</button>
        <button onClick={() => changeResourceType("albums")}>albums</button>
        <button onClick={() => changeResourceType("todos")}>todos</button>
      </div>
      {items.map((item, id) => <p key={id}>{item.title}</p>)}
    </>
  );
}

export default MyComponent;
