import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />

        <Product />

        <Footer />
    </div>
  );
}

export default App;
