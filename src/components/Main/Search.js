/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import Creatable, { useCreatable } from 'react-select/creatable'
import debounce from 'lodash.debounce'
import AppContext from '../../context/context'
import { SET_CURRENT_STOCK } from '../../context/action-types'
import { toast } from 'react-toastify'

const Search = ({ finnhubClient} ) => {
  const { state, dispatch, lists } = useContext(AppContext)
  const { currentStock } = state
  const [text, setText] = useState('')
  const [stocks, setStocks] = useState([])

  // Styling for search bar
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'grey',
      padding: 10,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  // when a stock is searched
  const handleSubmit = (e) => {
    try {
      // make a call to the finnhub api to look for the desired stock
      finnhubClient.symbolSearch(e.value, (error, data, response) => {
        // if we get a response
        if (data) {
          // condense search to the top 3 results
          const searchResults = data.result.slice(0, 3)
          const upperLim = searchResults.length < 3 ? 3 : searchResults.length
          let responseObject = []

          // clean up response data, trim everything after the period
          for (let i = 0; i < upperLim; i++) {
            const description = searchResults[`${i}`].description
            let symbol = searchResults[`${i}`].symbol

            if (symbol.includes('.')) {
              symbol = symbol.slice(0, symbol.indexOf('.'))
            }
            responseObject.push({ value: symbol, name: `${description}`})
          }

          // package up response data
          const responseStock = {
            ticker: responseObject[0].value,
            name: responseObject[1].name
          }

          // set the current stock to the search result
          dispatch({
            type: SET_CURRENT_STOCK,
            payload: responseStock
          })

          // if this is a new stock, add it to the list
          if (stocks.filter(stock => stock.value === responseObject[0].value).length === 0) {
            setStocks([ { value: responseObject[0].value }, ...stocks ])
          }

          return responseObject
        }
        
      }) 
    } catch (err) {
      // toast error here
      toast.error('An error occured, please try again')
    }
  }

  return (
    <>  
      <section className='search-bar' >
        <Creatable 
          cacheOptions
          onChange={handleSubmit}
          options={stocks}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.value}
          styles={customStyles}
          placeholder='Search for a stock...'
        />
      </section>
    </>
  )
}

export default Search
