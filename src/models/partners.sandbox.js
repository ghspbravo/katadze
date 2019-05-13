const partners = {
  '10':
    [{
      city_name: 'Екатеринбург',
      description: '–Ґ–Р–Э–¶–Х–Т–Р–Ы–ђ–Э–Ђ–Щ –¶–Х–Э–Ґ–† ¬ЂPRO–Ґ–Р–Э–¶–Ђ¬ї –Х–Ъ–С',
      id: 49,
      img:
        'https://katadze.ru/media/upload/partner_img/692dda2d-ef1f-4a4f-8340-51dcc7d10d6a.jpg',
      tags: '',
      title: 'PRO–Ґ–Р–Э–¶–Ђ - 40%'
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
      city_name: null,
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

let partnerCities = new Set()

Object.values(partners).forEach(partnersCategories => {
  partnersCategories.forEach(partner => {
    if (partner.city_name === null || partner.city_name === undefined) return
    partnerCities.add(partner.city_name)
  })
})

partnerCities.forEach((city, index) => {
  city
  index
})

let partnerList = []

Object.values(partners).forEach(categoryItems => {
  categoryItems.forEach((item, index) => {
    Object.values(item).length &&
      partnerList.push(item)
  })
})

partnerList