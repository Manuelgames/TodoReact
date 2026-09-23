
import './App.css';
import { AppUI } from './AppUI';
import { AppProvider } from '../../context';
function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;
