import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() =>{
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      
       setBodyParts(['all', ...bodyPartsData])
    }
      fetchExerciseData()
  }, [])

   const searchHandler = async () => {
       if(search){
         const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
          
         const seacrhedExercises = exerciseData.filter (
         (exercise) => exercise.name.toLowerCase().includes(search)
          ||  exercise.target.toLowerCase().includes(search)
          ||  exercise.equipment.toLowerCase().includes(search)
          ||  exercise.bodyPart.toLowerCase().includes(search)

         )
         setSearch('')
         setExercises(seacrhedExercises)
         window.scroll({
          top: 1875,
          left: 100,
          behavior: "smooth",
        });
       }
   }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px'}}}>
        Awesome Exercises You <br/>
        Should Know
      </Typography>
      <Box position='relative' mb='72px' >
        <TextField height='76px' placeholder='Search Exercises' type='text' 
           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '800px', xs: '350px'}, backgroundColor: '#fff', borderRadius: '40px' }} 
           value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
          <Button className='search-btn' onClick={searchHandler} 
           sx={{ bgcolor: '#ff2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px'}, fontSize: { lg: '20px', xs: '14px'}, height: '56px', position: 'absolute', right: '0'}}>
            Search
          </Button>   
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
