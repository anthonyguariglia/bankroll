/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import Creatable, { useCreatable } from 'react-select/creatable'
import debounce from 'lodash.debounce'
import AppContext from '../../context/context'
import { SET_CURRENT_STOCK } from '../../context/action-types'

const Search = ({ finnhubClient} ) => {
  const { state, dispatch, lists } = useContext(AppContext)
  const { currentStock } = state
  const [text, setText] = useState('')
  const [stocks, setStocks] = useState([])

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted blue',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
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

  const handleSubmit = (e) => {
    e.preventDefault
    console.log(e.value)

    // TODO: Dispatch the new stock to context, adding to the stock list (which gives the options of this dropdown), and to currentStock (which will be loaded to the graph)

    try {
      finnhubClient.symbolSearch(e.value, (error, data, response) => {
        // console.log(data.result)
        if (data) {
          const searchResults = data.result.slice(0, 3)
          // console.log(searchResults)
          const upperLim = searchResults.length < 3 ? 3 : searchResults.length
          let responseObject = []
          for (let i = 0; i < upperLim; i++) {
            const description = searchResults[`${i}`].description
            let symbol = searchResults[`${i}`].symbol

            if (symbol.includes('.')) {
              console.log(symbol)
              symbol = symbol.slice(0, symbol.indexOf('.'))
            }
            responseObject.push({ value: symbol, name: `${description}`})
          }
          // console.log(responseObject)
          // setOptions(responseObject)
          // console.log(responseObject)

          const responseStock = {
            ticker: responseObject[0].value,
            name: responseObject[1].name
          }
          dispatch({
            type: SET_CURRENT_STOCK,
            payload: responseStock
          })
          if (stocks.filter(stock => stock.value === responseObject[0].value).length === 0) {
            console.log('stocks: ', stocks, 'incoming: ', { value: responseObject[0].value })
            setStocks([ { value: responseObject[0].value }, ...stocks ])
          }
          // console.log(responseStock)
          return responseObject
        }
        
      }) 
    } catch (err) {
      // toast error here
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
