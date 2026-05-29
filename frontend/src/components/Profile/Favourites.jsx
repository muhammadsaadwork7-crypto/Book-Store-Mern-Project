import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookCard from "../BookCard/BookCard"; 

const Favourites = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const headers = {
    id:localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`, 
  };
  useEffect(()=>{
    const fetch = async () => {
      const response = await axios.get("http://localhost:1000/api/v1/get-favourite-books",
        {headers}
      );
      setFavouriteBooks(response.data.data);
    };
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
    {favouriteBooks.length === 0 && (
      <div className='flex-col text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full'>
        No Favourite Books
        <img src="./star.png" alt="star" className='h-[20vh] my-8 '/> 
      </div>
    )}

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'> 
      {favouriteBooks.map((items)=>(
        <div key={items._id}>
          <BookCard data={items} favourite={true}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Favourites;
