// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import ListingItem from '../components/ListingItem';
import { useSelector } from 'react-redux';
import { getListingsByPage } from '../store/apiCalls/listingsAPICalls';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const listings = useSelector(state=>state.listings.data);
  console.log(listings);
  useEffect(() => {
    getListingsByPage(dispatch)
  }, []);


  return (
    <div className={styles.container}>
      {listings.length > 1 && listings.map((listing) =>{
        return  <ListingItem data={listing}/>
      })}
    </div>
  )
}
