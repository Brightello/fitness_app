export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ddf73f1d24msh682e8b2793e62f1p159c55jsn45ba03147775',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
     export  const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ddf73f1d24msh682e8b2793e62f1p159c55jsn45ba03147775',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };



export const fetchData = async(url,options) =>{
 const response = await fetch(url,options);
 const data = await response.json();

 return data;
}