function formQueryUri(query, filterCity = null) {
  return `/partners/search?q=${query}${filterCity ? `&city=${filterCity}` : ''}`
}

const searchResults = formQueryUri('abc')
const searchWithFilterResults = formQueryUri('abc', 'Moscow')

function parseSearchUri(uri) {
  if (uri === undefined) return

  uri = decodeURI(uri)
  const parsedURI = /\?(q=[А-я, A-z]*)&?(city=[А-я, A-z]*)?/.exec(uri),
    [, queryMatch, filterCityMatch] = parsedURI

  return [queryMatch.slice(2), filterCityMatch && filterCityMatch.slice(5)]
}

// parseSearchUri(searchWithFilterResults)
// parseSearchUri(searchResults)//?
decodeURI("ГОРА%20ЕЖОВ") //?
parseSearchUri("?q=ГОРА%20ЕЖОВ")//?

const partners = {
  '10':
    [{
      city_name: 'Екатеринбург',
      description: '–Ґ–Р–Э–¶–Х–Т–Р–Ы–ђ–Э–Ђ–Щ –¶–Х–Э–Ґ–† ¬ЂPRO–Ґ–Р–Э–¶–Ђ¬ї –Х–Ъ–С',
      id: 49,
      img:
        'https://katadze.ru/media/upload/partner_img/692dda2d-ef1f-4a4f-8340-51dcc7d10d6a.jpg',
      tags: '',
      title: 'Katadze - 40%'
    },
    {
      city_name: null,
      description: '–°–Х–Ґ–ђ –Ы–Ш–Э–У–Т–Ш–°–Ґ–Ш–І–Х–°–Ъ–Ш–• –¶–Х–Э–Ґ–†–Ю–Т',
      id: 14,
      img:
        'https://katadze.ru/media/upload/partner_img/6529fd5d-9cd5-4d48-ac5c-2ab08c37c193.png',
      tags: '',
      title: 'TALISMAN - 40%'
    },
    {
      city_name: 'Москва',
      description: '–Ґ–Р–Э–¶–Х–Т–Р–Ы–ђ–Э–Р–ѓ –°–Ґ–£–Ф–Ш–ѓ',
      id: 47,
      img:
        'https://katadze.ru/media/upload/partner_img/e43b17a6-ee0b-44e7-9e98-1527588d2c22.jpg',
      tags: '',
      title: 'ROYAL CLUB EKB - 40%'
    },
    {},
    {}],
  '11':
    [{
      city_name: 'Екатеринбург',
      description: '–Ш–Э–Ґ–Х–Ы–Ы–Х–Ъ–Ґ–£–Р–Ы–ђ–Э–Ђ–Щ –С–Р–†',
      id: 50,
      img:
        'https://katadze.ru/media/upload/partner_img/9676ff80-7a32-44cc-bc04-3eae494173a6.png',
      tags: '',
      title: '–Ы–Х–Ю–Э–Ш–Ф –Ш–°–Р–Р–Ъ–Ю–Т–Ш–І - 15%'
    },
    {
      city_name: "Екатеринбург",
      description: '–†–Х–°–Ґ–Ю–†–Р–Э –Ы–Р–Т–Ъ–Р',
      id: 52,
      img:
        'https://katadze.ru/media/upload/partner_img/52fd6d75-ecf1-4d5b-9a1f-4b259cbcc678.jpg',
      tags: '',
      title: '–С–Ѓ–†–Ю –Э–Р–•–Ю–Ф–Ю–Ъ - 10%'
    },
    {},
    {},
    {},
    {}],
  '12': []
}

const parsedUri = parseSearchUri('/partners/search?q=KATADZE'),
  query = parsedUri[0]

function filterPartnersByName(name, partnersList) {
  const resultPartners = []
  partnersList.forEach(partnerCategories => {
    partnerCategories.forEach(partner => {
      if (partner.title && partner.title.toLowerCase().includes(name.toLowerCase())) //?
        resultPartners.push(partner)

    })
  })
  return resultPartners
}

filterPartnersByName(query, Object.values(partners)) //?

function filterPartnersByCity(city, partnersList) {
  const resultPartners = []
  partnersList.forEach(partnerCategories => {
    partnerCategories.forEach(partner => {
      if (partner.city_name && partner.city_name.toLowerCase().includes(city.toLowerCase())) //?
        resultPartners.push(partner)

    })
  })
  return resultPartners
}

filterPartnersByCity("Екатеринбург", Object.values(partners)) //?

/**
 * Filter partners list by title and/or city
 * @param {{title: string, city: string}} query 
 * @param {Object[]} data 
 * 
 * @returns {Object[]} search result
 */
function searchHandler(query, data) {
  let filterResults = filterPartnersByName(query.title, data)
  if (query.city) filterResults = filterPartnersByCity(query.city, [filterResults])

  return filterResults
}

searchHandler({
  title: 'Katadze',
  city: 'Екатеринбург'
}, Object.values(partners)) //?