import React from 'react';
import classes from "../styles/ListingItem.module.css"
import Image from 'next/image';

const ListingItem = ({data}) => {
    console.log(data);
  return (
    <div className={classes["listing-item"]}>
        <Image
        className={classes['image']}
        src={data.images.picture_url}
        alt="Picture of the author"
        width={300}
        height={180}
      />
      <div className={classes["listItemContent"]}>
          {data.review_scores && <div className={classes["ratings"]}>{data.review_scores.review_scores_value}/10</div>}
          {!data.review_scores && <div className={classes["ratings"]}>No Ratings</div>}

          <div className={classes["price"]}>${data.price.bytes.data[0]}/night</div>
      </div>
    </div>
  );
}

export default ListingItem;
