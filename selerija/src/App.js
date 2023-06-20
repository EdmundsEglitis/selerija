import { useEffect,useState } from "react";

function App() {
  const [zoodarzs, setZoodarzs] = useState([]);
  useEffect(()=>{

async function getData(){
  const response = await fetch("animals.json");
  const animals = await response.json();
  console.log(animals);
  setZoodarzs(animals);
}
  getData();
  }, []);
  const renderZoodarzs=zoodarzs.map(nebrunurupucis => {
    return <article>
      <img src={nebrunurupucis["image"]} alt={nebrunurupucis.animal}></img>
      <div classname="info">
      <h2> {nebrunurupucis["animal"]} </h2>
      <p> {nebrunurupucis["description"]} </p>
      <ul>
          {nebrunurupucis["answers"].map(ViensAnswer =>
          <li>{ViensAnswer}</li>
          )}
      </ul>
      </div>
    </article>  
  })
  return <main>{renderZoodarzs}</main>
  return <h1>Edmunds Eglitis</h1>
  }
export default App;
