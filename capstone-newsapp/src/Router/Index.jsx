import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Indonesia from '../Pages/Indonesia';
import Covid19 from '../Pages/Covid19';
import Programming from '../Pages/Programming';
import Saved from '../Pages/Saved';

const Index = () => (
  <Routes>
    <Route path="/" element={<Indonesia />} />
    <Route path="/Covid19" element={<Covid19 />} />
    <Route path="/Programming" element={<Programming />} />
    <Route path="/Saved" element={<Saved />} />
  </Routes>
)

export default Index;