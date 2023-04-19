export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56cb403ea8mshd2845f9537a125ap19fdc3jsncd41c97e99ed',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56cb403ea8mshd2845f9537a125ap19fdc3jsncd41c97e99ed',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const  data = await response.json()
     return data
}