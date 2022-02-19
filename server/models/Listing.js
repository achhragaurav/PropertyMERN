import mongoose from 'mongoose'

const listingsAndReviews = new mongoose.Schema({
  listing_url: {type: String},
  name: {type: String},
  summary: {type: String},
  space: {type: String},
  description: {type: String},
  neighborhood_overview: {type: String},
  notes: {type: String},
  transit: {type: String},
  access: {type: String},
  interaction: {type: String},
  house_rules: {type: String},
  property_type: {type: String},
  room_type: {type: String},
  bed_type: {type: String},
  minimum_nights: {type: Number},
  maximum_nights: {type: Number},
  cancellation_policy: {type: String},
  last_scraped: {type: Date},
  calendar_last_scraped: {type: Date},
  first_review: {type: Date},
  last_review: {type: Date},
  accommodates: {type: Number},
  bedrooms: {type: Number},
  beds: {type: Number},
  number_of_reviews: {type: Number},
  bathrooms: {
    type: {$numberDecimal: {type: String}}
  },
  amenities:{
    type: [String]
  },
  price: {
    type: {$numberDecimal: {type: Number}}
  },
  security_deposit: {
    type: {$numberDecimal: {type: Number}}
  },
  cleaning_fee: {
    type: {$numberDecimal: {type: Number}}
  },
  extra_people: {
    type: {$numberDecimal: {type: Number}}
  },
  guests_included: {
    type: {$numberDecimal: {type: Number}}
  },
  images: {
    type: {thumbnail_url: {type: String}},
    type: {medium_url: {type: String}},
    type: {picture_url: {type: String}},
    type: {xl_picture_url: {type: String}},
  },
  host: {
    type: {
    host_id: {type: String},
    host_url: {type: String},
    host_name: {type: String},
    host_location: {type: String},
    host_about: {type: String},
    host_response_time: {type: String},
    host_thumbnail_url: {type: String},
    host_picture_url: {type: String},
    host_neighbourhood: {type: String},
    host_response_rate: {type: Number},
    host_listings_count: {type: Number},
    host_total_listings_count: {type: Number},
    host_is_superhost: {type: Boolean},
    host_has_profile_pic: {type: Boolean},
    host_identity_verified: {type: Boolean},
  },
  host_verifications: {type: [String]}
  },
  address: {
    type:{
      street:  {type: String},
      suburb:  {type: String},
      government_area:  {type: String},
      market:  {type: String},
      country:  {type: String},
      country_code: {type: String}
    },

  location: {type: Object}
  },
  availability: {
    type: Object
  },
  review_scores: {
  type: Object
  },
  reviews: {type: Array},
},
{ collection: "listingsAndReviews" })

module.exports = mongoose.models.listingsAndReviews || mongoose.model('listingsAndReviews', listingsAndReviews)



