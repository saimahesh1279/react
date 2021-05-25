const Navbar = () => {
    return ( <
        nav className = "navbar" >
        <
        h1 > welcome to page 2 < /h1> <
        div className = "links" >
        <
        a href = "/" > Home < /a> <
        a href = "/create"
        style = {
            {
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '10px'
            }
        } > new page < /a> <
        /div> <
        /nav>
    );
}

export default Navbar;