const Home = () => {

    const handleClick = () => {

        console.log('hello ,mahesh')

    }

    const OnClick = () => {
        const x = "hello mahesh";
        console.log('hello ,mahesh')
        window.alert(x)
    }

    const handleClickAgain = (name) => {
        alert('hello' + ' ' + name);
    }

    return ( <
        div className = "content" >
        <
        h1 > Welcome Home < /h1> <
        button onClick = { OnClick } > On click < /button> <
        button onClick = { handleClick } > on click < /button> <
        button onClick = {
            () => {
                handleClickAgain('mahesh')
            }
        } > click me again < /button> <
        /div>
    );
}

export default Home;