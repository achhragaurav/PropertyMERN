import React from 'react'
import classes from "../styles/Filter.module.css"

const Filter = () => {
  return (
    <div className={classes["filter"]}>
      <div className={classes["filter-container"]}>
        <div className={classes["filter-cover"]}>
          <div className={classes["form"]}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" /></div>
          </div>
        </div>
    </div>
  )
}

export default Filter