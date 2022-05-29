import React, { useEffect, useState } from 'react';
import { getSingleListing } from '../store/apiCalls/listingsAPICalls';
import Image from "next/image"
import {FiShare} from "react-icons/fi"
import {AiFillStar, AiOutlineWifi} from "react-icons/ai"
import {BiMedal} from "react-icons/bi"
import { DateRangePicker, DateRange } from 'react-date-range';
import {AiOutlineHeart} from "react-icons/ai"
import Map from "../components/Map"
import classes from  "../styles/ListingId.module.css"

const ListingId = ({preData}) => {

  const [lastDate, setLastDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: lastDate,
    key: 'selection',
    color: "#000",
    rangeColors: "#000"
  }
  const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]
  const handleSelect = (ranges) =>{
    console.log(ranges);
    setStartDate(ranges.selection.startDate)
    setLastDate(ranges.selection.endDate)
      }
      const handleDate = (date) =>{
        return new Date(date)
      }
  const [foundData, setFoundData] = useState(preData);
  console.log(foundData);
  const anemities = foundData && foundData.amenities.slice(foundData.amenities.length/2, foundData.amenities.length).map((item, index) => {
    return <li key={ index}><AiOutlineWifi /> {item}</li>
    })

  const getSingleListingData = async () =>{
    let singleListingData = {};
    if(preData && preData.access){
      singleListingData = {...preData}
      return singleListingData
    }
    const listingId = window.location.href.split("/")[3];
    const fetchData = await getSingleListing(listingId);
    console.log(fetchData);
    singleListingData = {...fetchData.data}
    return singleListingData
}

  useEffect(() =>{
    getSingleListingData().then((data) =>{
    setFoundData(data)
    })
  },[])
  return (
    <div className={classes["listingIdPage"]}>
      {foundData && <>
      <div className={classes["topDetail"]}>
        <div className={classes["name"]}>
          <h4>{foundData.name}</h4>
          <div className={classes["name-bottom"]}>
          {foundData.review_scores && <p><span><AiFillStar style={{color: "magenta"}}/> {foundData.review_scores.review_scores_value/2}</span> <BiMedal style={{color: "magenta"}}/>{foundData.reviews.length} reviews</p>}
          <p>{foundData.address.market}, {foundData.address.street}</p>
          </div>
        </div>
        <div className={classes["topDetailRight"]}>
          <button><FiShare style={{marginRight: "5px"}}/> Share</button>
          <button><AiOutlineHeart style={{marginRight: "5px"}}/>Save</button>
        </div>
      </div>
      <div className={classes["imageSection"]}>
      <Image
        className={classes['image']}
        src={foundData.images.picture_url}
        alt="Picture of the author"
        width={900}
        height={500}
        />
      </div>
        <div className={classes["explanationBooking"]}>
          <div className={classes["explanationBookingLeft"]}>
            <div className={classes["details"]}>
              <h3>Room in hotel hosted by {foundData.host.host_name}</h3>
              <p>{foundData.guests_included} guests {foundData.bedrooms} bedrooms {foundData.beds} bed {foundData.bathrooms} shared bathrooms</p>
              <span></span>
            </div>
            <div className={classes["cancellation"]}>
              <div className={classes["pets"]}>
                <h4><i></i> {foundData.amenities[foundData.amenities.length-Math.floor(Math.random() * foundData.amenities.length)]}</h4>
                <p>Guests often search for this popular amenity</p>
              </div>
              <div className={classes["superHostSmall"]}>
              <h4><i></i> {foundData.host.host_name} is superhost</h4>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</p>
              </div>
              <div className={classes["cancel"]}>
            <h4><i></i>{
            foundData.cancellation_policy === "strict_14_with_grace_period" ?
          `Free cancellation before 14 days of booking` : `Free cancellation before 14 days of booking`
          } </h4>
              </div>
              <span></span>
            </div>
            <div className={classes["description"]}>
              <p>{foundData.description}
                </p>
                <button>Show More...</button>
                <span></span>
            </div>
        <div className={classes["sleepSection"]}>
          <h3>Where you&aposll sleep</h3>
          <div className={classes["box"]}>
            <i></i>
            <h4>{`${foundData.bedrooms} Bedroom`}</h4>
            <p>{foundData.beds} {foundData.bed_type}</p>
          </div>
        </div>
          </div>
          <div className={classes["explanationBookingRight"]}>

          <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
      />
          </div>
        </div>
        <div className={classes["placeOffers"]}>
          <h2>What this place offers</h2>
          <ul className={classes["offers"]}>
            {anemities}
          </ul>
          <button>Show All {foundData.amenities.length} anemities</button>
        </div>
        <div className={classes["calenders"]}>
        <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
      />
        </div>
        <div className={classes["reviews"]}>
          <div className={classes["reviewdesc"]}>
            <h4>{foundData.review_scores.review_scores_value/2} star {foundData.reviews.length} reviews</h4>
            <ul className={classes["bars"]}>
            <li>Cleanliness {foundData.review_scores.review_scores_cleanliness/2}/5</li>
            <li>Accuracy {foundData.review_scores.review_scores_accuracy/2}/5</li>
            <li>Communication {foundData.review_scores.review_scores_communication/2}/5</li>
            <li>Rating {foundData.review_scores.review_scores_rating}/100</li>
            <li>Location {foundData.review_scores.review_scores_location/2}/5</li>
            <li>Check-in {foundData.review_scores.review_scores_checkin/2}/5</li>
            <li>Value {foundData.review_scores.review_scores_value/2}/5</li>
            </ul>
          </div>
          <div className={classes["actualReviews"]}>
            {foundData.reviews.splice(0,4).map((review, index) =>{
              return (
                <div  className={classes["reviewBox"]} key={index}>
              <div className={classes["reviewBoxTop"]}>
                <div className={classes["reviewTopBox-top"]}>
                <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                <h1>{review.reviewer_name}</h1></div>
                <p>Date: {MONTH_NAMES[+handleDate(review.date).getMonth()-1]} {handleDate(review.date).getFullYear()}</p>
              </div>
              <div className={classes["reviewBoxMid"]}>
                <p>{review.comments.substring(0,100)}...</p>
              </div>
              <div className={classes["reviewBoxButton"]}>{+review.comments.length > 100 && <button>Show More... <i></i></button>}</div>
            </div>
              )
            })}
          </div>
          <button className={classes["showAll"]}>Show All Reviews</button>
          <span>Line</span>
        </div>
        <div className={classes["map-section"]}>
          <h3>Where you will be</h3>
          <div className={classes["map"]}>
            <Map coordinates={foundData.address.location.coordinates}/>
          </div>
          <p>{foundData.address.street}</p>
          <button className={classes["showMore"]}>Show more...</button>
        </div>
        <div className={classes["hostedBy"]}>
          <div className={classes["hostedByLeft"]}>
            <div className={classes["hostedByHeading"]}>
              <img src="" alt="" />
              <div className={classes["hostedByHeadingRight"]}>
                <h2>Hosted By {foundData.host.host_name}</h2>
                <p>Lives in {foundData.host.host_location}</p>
              </div>
            </div>
            <div className={classes["hosterRating"]}>
              <span style={{marginRight: "8px"}}>{foundData.host.host_response_rate} reviews</span>
              <span style={{marginRight: "8px"}}>{foundData.host.host_is_superhost? "Superhost" : ""}</span>
              <span style={{marginRight: "8px"}}>{foundData.host.host_identity_verified? "Identity Verified" : ""}</span>
            </div>
            <p>{foundData.host.host_about}</p>
               <div className={classes["duringStay"]}>
                 <h3>During your stay</h3>
                 <p>We are happy to provide you with all useful information you may need. We are living next door, so you will always have somebody nearby if you have any questions or need some help.</p>
               </div>
               {foundData.host.host_is_superhost && <div className={classes["superHost"]}>
                 <h3>
                 {foundData.host.host_name} is a Superhost
                 </h3>
                 <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
               </div>}
          </div>
          <div className={classes["hostedByRight"]}>
            <p>Languages: English, हिन्दी, ਪੰਜਾਬੀ</p>
            <p>Response rate: {foundData.host.host_response_rate}%</p>
            <p>Response time: within an hour</p>
            <button>Contact Host</button>
            <div className={classes["policy"]}>
            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </div>
          </div>

        </div>
        <div className={classes["things-to-know"]}>
          <div className={classes["houseRules"]}>
            <p><i></i>Check-in: After 12:00 pm</p>
            <p><i></i>Check out: 11:00 am</p>
            <p><i></i>Check-in: After 12:00 pm</p>
            <p><i></i>Check-in: After 12:00 pm</p>
            <p><i></i>Check-in: After 12:00 pm</p>
          </div>
          <div className={classes["homeAndSafety"]}>
            <p>Committed to Airbnb&aposs enhanced cleaning process. Show more</p>
            <p>Committed to Airbnb&aposs enhanced cleaning process. Show more</p>
            <p>Committed to Airbnb&aposs enhanced cleaning process. Show more</p>
            <p>Committed to Airbnb&aposs enhanced cleaning process. Show more</p>
          <button>Show More</button>
          </div>
          <div className={classes["cancellationPolicy"]}>
            <p>Free cancellation before 19 Mar</p>
            <button>Show More</button>
          </div>

        </div>
        <div className={classes["explore-other-cities"]}>
          <h1>Explore other options in and around Shimla</h1>
          <div className={classes["exploreCities"]}>
          Manali
          Chandigarh
          Rishikesh
          Bir
          Mussoorie
          Dehradun
          Kasauli
          Dharamshala
          Kasol
          New Delhi
          Lahore
          Islamabad
          </div>
        </div>
        <footer></footer>
      </>}
    </div>
  );
}

export default ListingId;
