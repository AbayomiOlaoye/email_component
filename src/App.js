import './App.css';
import ListEmail from './components/listEmail';

function App() {
  return (
    <div className="App">
        <h1>Hello, World!</h1>
        <p>I am <strong>Acco AI Mail Reader</strong></p>

        <section className="newMail">
          <h2>Inbox</h2>
          <div className="mail">
            <ListEmail />
          </div>
        </section>
    </div>
  );
}

export default App;
