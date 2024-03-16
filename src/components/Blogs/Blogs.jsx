import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md: w-2/3">
      <h1 className="border-red-400 border-2">Blogs:{blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id}
        handleAddToBookmark={handleAddToBookmark}
        blog={blog}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes={
  handleAddToBookmark:PropTypes.function
}

export default Blogs;
