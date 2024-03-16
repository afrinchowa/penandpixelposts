import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog ,handleAddToBookmark}) => {
  const {
    title,
    cover_img,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8 rounded-lg" src={cover_img} alt={`cover picture of blog ${title}`} />
      <div className="flex justify-between">
        <div className="flex gap-8">
          <img className="w-14 rounded-full h-14  " src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-blue-600 align-middle text-2xl"><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>{
        hashtags.map((hash, idx) => <span key={idx}> <a href=""> #{hashtags}</a> </span>)
        }</p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.function
};
export default Blog;
