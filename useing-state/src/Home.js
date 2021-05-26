import { useState } from 'react';
const Home = () => {
    // let name='mahesh';
    const [name, setName] = useState('mahesh');
    const [age, setAge] = useState(20);
    const OnClick = () => {
        setName('sai mahesh');
        setAge(22);
    }
    return ( <
        div className = "content" >
        <
        h1 > Welcome Home < /h1> <
        p > { name }
        is { age }
        years old < /p><br></br >
        <
        button onClick = { OnClick } > On click < /button> <
        /div>
    );
}
export default Home;