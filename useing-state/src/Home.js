import { useState } from 'react';

const Home = () => {

    // let name='mahesh';
    const [name, setName] = useState('mahesh');



    const OnClick = () => {
        setName('sai mahesh');

    }


    return ( <
        div className = "content" >
        <
        h1 > Welcome Home < /h1> <
        p > { name } < /p><br></br >

        <
        button onClick = { OnClick } > On click < /button>

        <
        /div>
    );
}

export default Home;