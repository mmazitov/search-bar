import './SearchResult.css';
export default function SearchResult({result}) {
  return (
    <div className='search-result' onClick={(e) => alert(`You clicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}
