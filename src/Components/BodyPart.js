import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack className='bodyPart-card' type='button' alignItems='center' justifyContent='center' 
      sx={{
         borderTop: bodyPart === item ? '4px solid #ff2625' : '',
         backgroundColor: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '280px', gap: '47px', cursor: 'pointer'
      }}
       onClick={() => {setBodyPart(item)
           window.scrollTo({ top: '1850', left: '100', behavior: 'smooth'})
      }}

      >
      <img src={Icon} alt='dumbell' style={{ width: '40px', height: '40px'} } />
     <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
      {item}
     </Typography>
    </Stack>
  )
}

export default BodyPart
