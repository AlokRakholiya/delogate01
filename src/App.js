import logo from './logo.svg';
import './scss/main.scss';
import './App.css';
import Header from './shared/components/header';
import Home from './modules/home';
import Footer from './shared/components/footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App;
