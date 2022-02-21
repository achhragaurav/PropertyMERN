import classes from "../styles/Loading.module.css"
import React from 'react'

class Loading extends React.Component {
  render(){
    return( <div id={classes['outer']}>
        <div id={classes['middle']}>
          <div id={classes['inner']}>    
      </div>
      </div>
      </div>
    );
  }
}
export default Loading