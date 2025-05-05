function SearchForm() {


    const url = 'https://api.unsplash.com/search/photos?page=1&query=office'

    function handleSubmit(e) {
        e.preventDefault()
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return

        console.log(searchValue)



    }


    return (
        <section >
            <h1 className="title">Fetchy</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input search-input" name="search" placeholder="cats" />

                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </section>
    )
}

export default SearchForm
