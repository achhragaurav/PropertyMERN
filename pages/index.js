import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchFunction = async() =>{
      const data = await fetch("/api/listings");
      const done = await data.json();
      console.log(done);
      setData(done.data)
    }
    fetchFunction()
  }, []);


  return (
    <div className={styles.container}>
      {data.length > 1 && data.map((listing) =>{
        return  <Image
        src={listing.images.picture_url}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      })}
    </div>
  )
}
