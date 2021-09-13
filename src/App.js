import './App.css';
import SearchForm from './Components/SearchForm/SearchForm'
import SearchResults from './Components/SearchResults/SearchResults'

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_TRAVEL_SAFE_KEY,
    // key: process.env.REACT_APP_TRAVEL_SAFE_KEY_PROD,
    api: ''
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Venture</h1>
      </header>
      <main>
        <SearchForm />
        <SearchResults results={results}/>
      </main>
    </div>
  );
}

export default App;
