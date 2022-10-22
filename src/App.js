import './App.css';
import Header from './components/Header';

const App = () => {
    return (
        <div className='container'>
            <Header />
            <Header color='#C75656' />
            <Header color='#AB5FBE' />
        </div>
    );
};

export default App;
