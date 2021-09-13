import './App.css';
import SearchForm from './Components/SearchForm/SearchForm'
import SearchResults from './Components/SearchResults/SearchResults'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Venture</h1>
      </header>
      <main>
        <SearchForm />
        <SearchResults />
      </main>
    </div>
  );
}

export default App;
