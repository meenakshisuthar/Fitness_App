import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard'



const HorizontalScrollbar = ( {data, bodyPart, setBodyPart, isBodyParts}) => {

  return (

    <ScrollMenu >  
      {data.map((item) => (
       <Box 
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
       > 
       { isBodyParts? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        : <ExerciseCard exercise={item}/> 
       } 
       </Box>
       )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
