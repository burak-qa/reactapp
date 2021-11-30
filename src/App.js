
import './App.css';
import HeaderComponent from './components/header';
import MainComponent from './components/main';
import FooterComponent from './components/footer';
import UserComponent from './components/user';
function App() {
  return (
  <div className='main'>
    <h2>App components</h2>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
    <UserComponent/>

  </div>
  );
}

export default App;
