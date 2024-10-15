import { HomeContainer } from '@pure-pages/feature';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeContainer />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
