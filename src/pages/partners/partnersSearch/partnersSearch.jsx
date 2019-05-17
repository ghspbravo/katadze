import React, { useState, useEffect, useRef } from 'react'
import './partnersSearch.scss'
import { formQueryUri, parseSearchUri } from './partnersSearchFunctions';
import { useStore } from 'easy-peasy';

function defaultSearch(router, query = '', filterCity = '') {
  router.history.push(formQueryUri(query, filterCity))
}

/**
 * Partner's search component
 * @param {function} search custom submit handler callback
 */
export default function partnersSearch(router, search = defaultSearch) {

  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')

  const resetSearch = () => {
    search(router)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    search(router, query, city)
  }

  const selectChangeHandler = (e) => {
    search(router, query, e.target.value)
  }

  const cities = useStore(store => store.partners.partnerCities)

  const searchField = useRef()

  const focusOnSearchField = () => {
    searchField.current && searchField.current.focus()
  }
  useEffect(() => {
    focusOnSearchField()
    window.addEventListener('keydown', () => {
      focusOnSearchField()
    })

    if (!router.location.search) return
    const [query, city] = parseSearchUri(router.location.search)
    setQuery(query)
    setCity(city)

    return(() => {
      window.removeEventListener('keydown', focusOnSearchField)
    })
  }, [])

  return (
    <form className="search-form"
      onSubmit={submitHandler}>
      <div className="row no-gutters search-input">
        <input ref={searchField} value={query} onChange={e => setQuery(e.target.value)} className="col search-input__input" type="text"
          placeholder="Найти магазин, заведение, активность..." />
        <button className="search-input__button"><i className="fas fa-search"></i></button>
      </div>
      <p className="text-small pl-2">Например: магазин одежды, кафе, лыжи</p>

      <div className="row no-gutters">
        <div className="mr-2 mb-1">
          <div className="select">
            <select value={city} onChange={selectChangeHandler}>
              <option defaultValue disabled>Выберите город</option>
              <option value="">Все</option>
              {cities &&
                Array.from(cities).map((city, index) => <option key={index} value={city}>{city}</option>)
              }
            </select>
          </div>
        </div>
        <div>
          <button type="button" onClick={resetSearch}>Очистить</button>
        </div>
      </div>

    </form>
  )
}
