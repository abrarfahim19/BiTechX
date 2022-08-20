import React, { useEffect, useState } from "react";

type Book = {
  title: string;
  description: string;
};

type BookInfo = {
  id: number;
  count: number;
};

export const BookComponent = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [info, setInfo] = useState<BookInfo>({ id: 1, count: 0 });

  const getBooks = async () => {
    // @ts-ignore [for gettbookApi(error handling)]
    const { count, data } = await getBookApi(api);
    setInfo({ ...info, count: count });
    setBooks(data);
  };

  // Bad practice
  /* useEffect(async () => {
  const data = await fetchData();
}, [fetchData]) */

  // Good Practice
  /* useEffect(() => {
  // data fetching function
  const fetchData = async () => {
    const data = await fetch('https://yourapi.com');
  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);
}, []) */

  useEffect(() => {
    // declare the data fetching function. And the function we have called is asynchronous function
    getBooks();
  }, [info.id]);

  return (
    //React Fragment is good practice. Because it removes additional div that later causes styling problem
    // Note: <></> doesn't support key. If it comes to assigning new Key we use <Fragment></Fragment>
    <>
      <h2>{books[0].title}</h2>
      <p>{books[0].description}</p>
    </>
  );
};
