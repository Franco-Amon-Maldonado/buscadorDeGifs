const apiKey = 't2bymsmmAm1bPfSEPQvt9fWIIDS1po4r'


export default function getGift({keyword = 'gimnasio'} = {}){
const urlAPI =   `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return  fetch(urlAPI)
        .then(res => res.json())
        .then(response => {

          const {data} = response

          const gift = data.map(image => { 
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {title, id, url}
          })

        return gift
        
        })
         



}