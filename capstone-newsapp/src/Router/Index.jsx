import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Indonesia from '../Pages/Indonesia';
import Covid19 from '../Pages/Covid19';
import Programming from '../Pages/Programming';
import Saved from '../Pages/Saved';
import SearchPage from '../Pages/SearchPage';

const Index = (props) => (
  <Routes>
    <Route path="/" element={<Indonesia getNewsData={props.getNewsData}/>} />
    <Route path="/covid19" element={<Covid19 getNewsData={props.getNewsData}/>} />
    <Route path="/programming" element={<Programming getNewsData={props.getNewsData}/>} />
    <Route path="/search/:query" element={<SearchPage searchValue={props.searchValue}/>} />
    <Route path="/saved" element={<Saved />} />
  </Routes>
)

export default Index;