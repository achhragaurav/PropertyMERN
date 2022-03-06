
import dbConnect from '../../server/dbConnect'
import listingsAndReviews from '../../server/models/Listing'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const resultsPerPage = 20;
        let id = req.query.id;
        if(id){
          const listing =  await listingsAndReviews.findById(id);
          return res.status(200).json({data: listing})
        }
        
        const listings = await listingsAndReviews.find({}).limit(resultsPerPage)
        res.status(200).json({ success: true, data: listings})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

