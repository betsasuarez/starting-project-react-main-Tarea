import reactImg from './assets/react-core-concepts.png';
import compImg from './assets/components.png';

import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// Nuevo componente para mostrar myData
function UserInfo(props) {
  return (
    <div>
      <h2>{props.data[0]}</h2>
      <h2>{props.data[1]}</h2>
      <h2>{props.data[2]}</h2>
      <h2>{props.data[3]}</h2>
    </div>
  );
}

function App() {
  const myData = ['Nombre: Law', 'Apellido: Torao', 'Ocupacion: Estudiante', 'Edad: 24 años'];

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        {/* Pasar myData como props al componente UserInfo */}
        <UserInfo data={myData} />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The code UI building block"
              image={reactImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;



