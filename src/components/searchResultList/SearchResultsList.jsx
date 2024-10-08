import './SearchResultsList.css';

import SearchResult from '../searchResult/SearchResult';

export default function SearchResultsList({results}) {
  return (
    <div className='results-list'>
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id} />
        })
      }
    </div>
  )
}
