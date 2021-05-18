export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=viH2AF7zFldSJyBgBrV3X9TXqnEPOwCa`
    const resp = await fetch(url)
    // const data = await resp.json()
    const { data } = await resp.json()

    const gifs = data.map( image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    })
    
    return gifs
}