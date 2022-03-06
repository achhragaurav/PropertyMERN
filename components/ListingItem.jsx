import React,{useEffect} from 'react';
import classes from "../styles/ListingItem.module.css"
import Image from 'next/image';
import {GoVerified} from "react-icons/go"
import { FaBath} from "react-icons/fa"
import { BiBed} from "react-icons/bi"
import {MdReviews} from "react-icons/md"


import Rating from '@mui/material/Rating';
import Link from 'next/link';

const ListingItem = ({data}) => {
  // function ab2str(buf) {
  //   return String.fromCharCode.apply(null, new Uint8Array(buf));
  // }
  // function str2ab(str) {
  //   var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  //   var bufView = new Uint16Array(buf);
  //   for (var i=0, strLen=str.length; i < strLen; i++) {
  //     bufView[i] = str.charCodeAt(i);
  //   }
  //   return buf;
  // }
    useEffect(() => {
    //  const conv=  ab2str(data.price.bytes.data);
    //  console.log('====================================');
    //  console.log(conv.charCodeAt());
    //  console.log('====================================');
    }, []);
  return (
    <Link href={`/${data._id}`}>

    <div className={classes["listing-item"]}>
        <Image
        className={classes['image']}
        src={data.images.picture_url}
        alt="Picture of the author"
        width={300}
        height={180}
        />
      <div className={classes["listItemContent"]}>
          <div className={classes["price"]}> 
          <h3> <GoVerified /> {`$${data.price}/night`}</h3>
          <p><BiBed /> {data.beds} <br /> <FaBath /> {Math.floor(data.bathrooms)} 
          <br />
          <MdReviews/> {data.number_of_reviews}
          </p>
          </div>
          {data.review_scores && <div className={classes["ratings"]}>
            
          <Rating className={classes["rating"]} name="read-only" value={data.review_scores.review_scores_value/2} readOnly />

            
            </div>}
          {!data.review_scores && <div className={classes["ratings"]}>No Ratings</div>}

      </div>
    </div>
        </Link>
  );
}

export default ListingItem;
