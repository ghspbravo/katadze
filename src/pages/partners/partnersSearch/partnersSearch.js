/**
 * Form query URI form query string
 * @param {string} query query string
 * @param {string} filterCity filter by this city
 * 
 * @returns adress template: "/partners/search?q=query&city=name"
 */
export function formQueryUri(query, filterCity = null) {
  return `/partners/search?q=${query}${filterCity ? `&city=${filterCity}` : ''}`
}

/**
 * Parse search params from uri
 * @example
 * parseSearchUri("/partners/search?q=query&city=name")
 * @param {string} uri uri with search params
 * 
 * @returns {[string, string|undefined]} [query, city filter]
 */
export function parseSearchUri(uri) {
  uri = decodeURI(uri)
  const parsedURI = /\?(q=[А-я, A-z]*)&?(city=[А-я, A-z]*)?/.exec(uri),
    [, queryMatch, filterCityMatch] = parsedURI

  return [queryMatch.slice(2), filterCityMatch && filterCityMatch.slice(5)]
}

/**
 * filter partners wich name contains search string
 * @param {string} name name of partner
 * @param {Object[]} partnersList partners data
 * 
 * @returns {Object[]} result partners
 */
export function filterPartnersByName(name, partnersList) {
  const resultPartners = []
  partnersList.forEach(partner => {
    if (partner.title && partner.title.toLowerCase().includes(name.toLowerCase())) //?
      resultPartners.push(partner)
  })
  return resultPartners
}

/**
 * filter partners wich name contains search string
 * @param {string} city city of partner
 * @param {Object[]} partnersList partners data
 * 
 * @returns {Object[]} result partners
 */
export function filterPartnersByCity(city, partnersList) {
  const resultPartners = []
  partnersList.forEach(partner => {
    if (partner.city_name && partner.city_name.toLowerCase().includes(city.toLowerCase())) //?
      resultPartners.push(partner)

  })
  return resultPartners
}