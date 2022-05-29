import { getData, loadingData } from "../slices/listingsSlice";

export const getListingsByPage = async (dispatch, page) =>{
        dispatch(loadingData(true))
        const data = await fetch(`/api/listings?page=${page}`);
        const done = await data.json();
        console.log(done, "I am booboo");
        dispatch(getData(done))
        dispatch(loadingData(false))
        return done
}
export const getSingleListing = async (id) =>{
        const data = await fetch(`/api/singleListing?id=${id}`);
        const done = await data.json();
        console.log(id, "helli");
        return done
}

