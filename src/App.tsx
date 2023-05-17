import { ThemeProvider } from './ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
