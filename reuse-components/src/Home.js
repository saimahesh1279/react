import { useState, useEffect } from 'react';
import BlogList from './BlogList'
const Home = () => {




    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mahesh', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'susheel', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mahesh', id: 3 }
    ])
    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs = newBlog;
    }
    return ( <
        div className = "Home" >
        <
        BlogList blogs = { blogs }
        handleDelete = { handleDelete } > < /BlogList>

        <
        /div>
    );
}
export default Home;