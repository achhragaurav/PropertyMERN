import { getData } from "../slices/listingsSlice";

export const getListingsByPage = async (dispatch) =>{
        const data = await fetch("/api/listings?page=1");
        const done = await data.json();
        console.log(done);
        dispatch(getData(done))
}

