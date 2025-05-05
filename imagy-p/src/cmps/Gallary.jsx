import axios from 'axios'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';



const url = `https://api.unsplash.com/search/photos?query=shake&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`;


function Gallary() {
    const response = useQuery({
        queryKey: ['images'],
        queryFn: async () => {
            const res = await axios.get(url)

            return res.data;
        }
    })

    if (response.isLoading) {
        return <section>
            <h4>loading...</h4>
        </section>
    }

    if (response.isError) {
        return (
            <section>
                <h4>there was an error</h4>
            </section>
        )
    }

    const results = response.data.results;

    if (results.length < 1) {
        return (
            <section>
                <h4>no results found</h4>
            </section>
        )
    }

    return (
        <section className='image-container'>
            {results.map((item) => {
                const url = item?.urls?.regular

                return <img src={url} key={item.id} alt={item.alt_descreption} className='img' />
            })}

        </section>
    )
}

export default Gallary
