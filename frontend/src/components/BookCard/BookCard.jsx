import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const BookCard = ({ data, favourite }) => {
    const headers = {
    id:localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid:data._id, 
  };
  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/remove-book-from-favourite",
      {},
      {headers}
    );
    alert(response.data.message);
  }
  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col h-full'>
        <Link to={`/view-book-details/${data._id}`}>
            <div className='h-full flex flex-col'>
                <div className='bg-zinc-900 rounded flex items-center justify-center h-[260px] overflow-hidden'>
                    <img src={data.url} alt={data.title} className='h-full w-full object-cover'/>
                </div>
                <h2 className='mt-4 text-xl font-semibold text-white line-clamp-2 min-h-[56px]'>{data.title}</h2>
                <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
                <p className='mt-2 text-zinc-200 font-semibold text-xl mt-auto'>Rs. {data.price}</p>
            </div>
        </Link>
        {favourite && (
            <button className='bg-yellow-50 px-4 py-2 rounded border border-yellow-400 text-yellow-500 mt-4'
            onClick={handleRemoveBook}>
            Remove from favourite</button>
        )}
    </div>
  );
}

export default BookCard
