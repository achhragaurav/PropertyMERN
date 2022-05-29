// add bootstrap css 

import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import classes from "../styles/Home/HomePage.module.css"
import Filter from '../components/Filter';

export default function Home() {

  return (<>
  <Navbar/>
      <div className={classes["home-section"]}>
        <div className={classes["home-section-text"]}>
          <h1>Enjoy a Luxary Experience</h1>
          <p>---- Hotels and Resorts -----</p>
          </div>
          <Filter/>
        </div>
          <div className={classes["our-rooms"]}>
            <h3>Our Rooms</h3>
            </div>
      </>
  )
}
