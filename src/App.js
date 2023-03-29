import './App.css';
import { useState, Suspense, useEffect } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import { createResource as fetchData } from './components/helper'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
    }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  const renderGallery = () => {
    if(data){
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;





// useEffect(() => {
    //     if(search) {
    //         const fetchData = async () => {
    //             document.title = `${search} Music`
    //             const response = await fetch(API_URL + search)
    //             const resData = await response.json()
    //             if (resData.results.length > 0) {
    //                 return setData(resData.results)
    //             } else {
    //                 return setMessage('Not Found')
    //             }
    //         }
    //         fetchData()
    //     }
    // }, [search])
    
    // const handleSearch = (e, term) => {
    //   e.preventDefault();
    //   const fetchData = async () => {
    //     document.title = `${term} Music`;
    //     const response = await fetch(
    //       `https://itunes.apple.com/search?term=${term}`
    //     );
    //     const resData = await response.json();
    //     if (resData.results.length > 0) {
    //       return setData(resData.results);
    //     } else {
    //       return setMessage("Not Found.");
    //     }
    //   };
    //   fetchData();
    // };
