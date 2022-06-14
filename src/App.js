
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';
import AppRouter from './components/routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

