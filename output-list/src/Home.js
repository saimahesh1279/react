import { useState } from 'react';
const Home = () => {
    // let name='mahesh';
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const OnClick = () => {
        setName('sai mahesh');
        setAge(22);
    }
    return ( <
        div className = "Home" > {
            blogs.map(blog => ( <
                div className = "blog-preview"
                key = { blog.id } >
                <
                h2 > { blog.title } < /h2> <
                p > Written by { blog.author } < /p> <
                /div>
            ))
        } <
        /div>
    );
}
export default Home;