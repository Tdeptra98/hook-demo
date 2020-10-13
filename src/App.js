import React, { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination/Pagination';
// import PostList from './components/Pagination/';
import pinkClock from './components/customhook/pinkClock';
import MagicBox from './components/magicBox/MagicBox';

function App() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  function handlePageChange(newPage) {
    console.log('new page: ', newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  }
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?_limit=${filter._limit}&_page=${filter._page}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { pagination } = responseJSON;
        setPagination(pagination);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [filter]);
  return (
    <div className="App">
      {/* <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination> */}

      <MagicBox></MagicBox>
    </div>
  );
}

export default App;
