import './App.css'

function App() {
  return (
    <main className="app-container">
      <h1>Lista de Tareas</h1>
      
      <section className="input-container">
        <input className="text-input" placeholder="Escribe una tarea" />
        <button className="submit-button">ADD</button>
      </section>

      <ul className="list-container">
        <li className="list-item">
          <input type="checkbox" />
          <p>Tarea 1</p>
          <button className="delete-button">X</button>
        </li>
        <li className="list-item">
          <input type="checkbox" />
          <p>Tarea 2</p>
          <button className="delete-button">X</button>
        </li>
        <li className="list-item">
          <input type="checkbox" />
          <p>Tarea 3</p>
          <button className="delete-button">X</button>
        </li>
      </ul>
    </main>
  )
}

export default App
