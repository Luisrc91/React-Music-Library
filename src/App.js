import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'


function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
   
  
    useEffect(() => {
      const fetchData = async () => {
          document.title = `${search} Music`
          const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
          const resData = await response.json()
          if (resData.results.length > 0) {
              setData(resData.results)
          } else {
              setMessage('Not Found')
          }
      }
      fetchData()
  }, [search])
  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(
        `https://itunes.apple.com/search?term=${term}`
      );
      const resData = await response.json();
      if (resData.results.length > 0) {
        return setData(resData.results);
      } else {
        return setMessage("Not Found.");
      }
    };
    fetchData();
  };

  return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <DataContext.Provider value={data} >
            <Gallery />
        </DataContext.Provider>
    </div>
    )
}

export default App

