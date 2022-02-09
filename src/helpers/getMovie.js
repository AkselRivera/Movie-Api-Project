

export const getMovie=async ( url)=>{
    

    const resp = await fetch(url);
    const body= await resp.json();

    console.log(body);
        const movie= body
    
    //  .map*

        return movie;

}


  // .map( hero=>(
        //     {
        //         title:hero.original_title,
        //         overview:hero.overview,
        //         url: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
        //         description: hero.description,

        //     }
        // ))