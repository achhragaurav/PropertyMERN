import React from 'react';
import { Pagination } from '@mui/material';
// own css files here
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import ListingItem from '../../components/ListingItem';
import { useSelector } from 'react-redux';
import { getListingsByPage } from '../../store/apiCalls/listingsAPICalls';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Banner from '../../components/Banner';
import Filter from '../../components/Filter';

const Listid = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const listings = useSelector(state=>state.listings.data);
    const totalPages = useSelector(state=>state.listings.totalPages);
    const routerPage = router.query.Listid;
    const [paginationPage, setPaginationPage] = useState(1);
    const loadingData = useSelector(state=>state.listings.loading);
    console.log(loadingData);
    useEffect(() => {
      const page = (window.location.href.split("/")[4]);
    console.log(page);
      getListingsByPage(dispatch, page)
      setPaginationPage(page)
    }, [routerPage]);
  
    const handlePage = async (e, paginationPage) =>{
      e.preventDefault();
    //  await getListingsByPage(dispatch, +e.target.textContent - 1);
     router.push(`http://localhost:3000/stayin/${+e.target.textContent}`)
    }
  return (
    <>
      {!loadingData && <div className={styles["listIdPage"]}>
      <Navbar/>
      <Filter/>
      {listings && listings.length > 1 && <Banner data={listings[0]}/>}
    <div className={styles.container}>
      {listings && listings.length > 1 && listings.map((listing) =>{
        return  <ListingItem data={listing}/>
      })}
      {listings && <Pagination defaultPage={+paginationPage} count={totalPages} variant="outlined" onChange={(e) => {
        handlePage(e, e.target.textContent)
      }}/>}
    </div></div>}
    {loadingData && <Loading/>}
    </>
  );
}

export default Listid;
