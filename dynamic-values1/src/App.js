import logo from './logo.svg';
import './App.css';

function App() {
    const title = 'welcome to teams';
    const likes = 50;
    const link = "https://www.google.co.in/";
    return (

        <
        div className = "App" >
        <
        div className = "content" >
        <
        h1 > { title } < /h1> <
        p > like { likes }
        times < /p> <
        p > { 10 } < /p> <
        p > { "hello, mahesh" } < /p> <
        p > { Math.sqrt(likes) } < /p> <
        a href = { link } > Google < /a> <
        /div> <
        /div>
    );
}

export default App;