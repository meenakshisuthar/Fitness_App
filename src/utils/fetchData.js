export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd0d6878267msh6cbc5d338340291p1fe3c7jsn9a721cb4eb30',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd0d6878267msh6cbc5d338340291p1fe3c7jsn9a721cb4eb30',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const  data = await response.json()
     return data
}