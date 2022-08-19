import React, { useEffect, useState } from 'react';

type Book = {
  title: string,
  description: string
}

type BookInfo = {

  id: number,
  count: number
}

export const BookComponent = () => {
const [books, setBooks] = useState<Book[]>([]);
const [info, setInfo] = useState<BookInfo>({id: 1, count: 0});

const getBooks = async () => {
    // @ts-ignore [for gettbookApi(error handling)]
	const {count, data} = await getBookApi(api);
	setInfo({...info, count: count});
	setBooks(data);
} 

useEffect( () => {
    // declare the data fetching function. And the function we have called is asynchronous function
    getBooks()
}, [info.id] );

return (
    <>
    <h2>{ books[0].title }</h2>
    <p>
        { books[0].description }
    </p>
  </>
)
}