import Image from 'next/image';
import React from 'react';
import classes from "../styles/Banner.module.css"
import Rating from '@mui/material/Rating';

const Banner = ({data}) => {
  console.log(data);
  return (
    <div className={classes["banner"]}>
      <div className={classes["banner-container"]}>
      <div className={classes["banner-image-container"]}>
      <Image
        src={data.images.picture_url}
        alt="picture"
        width={700}
        height={500}
        />
      </div>
      <div className={classes["banner-content-container"]}>
        <h3>{data.name}</h3>
        <p>Accesiblity: {data.access}</p>
        <p>Summary: {data.summary}</p>
        {data.reviews && data.reviews.length > 1 && <span><Rating className={classes["rating"]} name="read-only" value={data.review_scores.review_scores_value/2} readOnly /> <br /> <p>{data.reviews.length} reviews</p></span>}
        </div>
      </div>
    </div>
  );
}

export default Banner;
