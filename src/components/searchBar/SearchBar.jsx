import './SearchBar.css';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({setResults}) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value && 
            user && 
            user.name && 
            user.name.toLowerCase().includes(value)
          )
        })
        setResults(results);
      });    
  }
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className="input-wrapper">
      <FaSearch className="search-icon" />
      <input 
        className='search-input' 
        type="text" 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}
