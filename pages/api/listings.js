
import dbConnect from '../../server/dbConnect'
import listingsAndReviews from '../../server/models/Listing'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const resultsPerPage = 20;
        let page = +req.query.page >= 1 ? +req.query.page+1 : 1;
        const query = req.query.page;
        page = page - 1
        console.log(query);
        if(query){
          const listingsperpage =  await listingsAndReviews.find({}).limit(resultsPerPage).skip(resultsPerPage * page);
          const listingsAndReviewsCount = await listingsAndReviews.estimatedDocumentCount();
          return res.status(200).json({ success: true,page: page, totalPages: Math.floor(listingsAndReviewsCount/10),data: listingsperpage})
        }
        
        const listings = await listingsAndReviews.find({}).limit(resultsPerPage)
        res.status(200).json({ success: true, data: listings})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const listings = await listingsAndReviews.create(req.body)
        res.status(201).json({ success: true, data: listings })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

