import React from 'react'
import './partnersSearch.scss'
import { useFormState } from 'react-use-form-state';
import { formQueryUri } from './partnersSearchFunctions';
import { useStore } from 'easy-peasy';

function defaultSearch(router, query = '', filterCity = '') {
  router.history.push(formQueryUri(query, filterCity))
}

/**
 * Partner's search component
 * @param {function} search custom submit handler callback
 */
export default function partnersSearch(router, search = defaultSearch) {
  const [formState, { text, select }] = useFormState();

  const resetSearch = () => {
    router.history.push(formQueryUri("", null))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    search(router, formState.values.query, formState.values.city)
  }

  const cities = useStore(store => store.partners.partnerCities)

  return (
    <form className="search-form"
      onSubmit={submitHandler}>
      <div className="row no-gutters search-input">
        <input {...text('query')} className="col search-input__input" type="text"
          placeholder="Найти магазин, заведение, активность..." />
        <button className="search-input__button"><i className="fas fa-search"></i></button>
      </div>
      <p className="text-small pl-2">Например: магазин одежды, кафе, лыжи</p>

      <div className="row no-gutters">
        <div className="select mr-2 mb-1">
          <select {...select('city')}>
            <option defaultValue disabled>Выберите город</option>
            <option>Все</option>
            {cities &&
              Array.from(cities).map((city, index) => <option key={index} value={city}>{city}</option>)
            }
          </select>
        </div>
        <button onClick={resetSearch}>Очистить</button>
      </div>

    </form>
  )
}
