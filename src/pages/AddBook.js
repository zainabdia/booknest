import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    cover_image_url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = async (e) => {
    e.preventDefault();

    // basic validation
    if (!book.title || !book.author || book.price === "") {
      alert("please fill title, author, and price");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/books", {
        title: book.title,
        author: book.author,
        price: Number(book.price),
        cover_image_url: book.cover_image_url || null,
      });

      alert("book added ✅");
      navigate("/books"); 
    } catch (err) {
      console.log(err);
      alert("failed to add book");
    }
  };

  return (
    <>
      <h1>Add New Book</h1>

      <input
        type="text"
        placeholder="Title"
        name="title"
        value={book.title}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        placeholder="Author"
        name="author"
        value={book.author}
        onChange={handleChange}
      />
      <br />

      <input
        type="number"
        placeholder="Price"
        name="price"
        value={book.price}
        onChange={handleChange}
        step="0.01"
      />
      <br />

      <input
        type="text"
        placeholder="Cover Image URL (optional)"
        name="cover_image_url"
        value={book.cover_image_url}
        onChange={handleChange}
      />
      <br />

      <button onClick={handleAddClick}>Add</button>
    </>
  );
};

export default AddBook;
