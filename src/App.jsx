import './App.css'

import SearchBar from './components/searchBar/SearchBar'
import SearchResultsList from './components/searchResultList/SearchResultsList'
import { useState } from 'react'

function App() {
  const [results, setResults] = useState([])

  return (
    <div className='App'>
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}


export default App
