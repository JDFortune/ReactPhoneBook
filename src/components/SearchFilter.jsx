const SearchFilter = ({setFilter}) => {

  const changeFilter = (event) => {
    let searchText = event.target.value
    setFilter(searchText)
  }

  return (
    <>
      filter selection: <input onChange={changeFilter} />
    </>
  )
}

export default SearchFilter