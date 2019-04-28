import fetch from 'node-fetch';
import server from '../../models/constants.js'

let partners = {}

let partnersImagesLoadState = []

const fetchedData = await fetch(server + 'partner_categories/', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
  .then(data => {

    data.results.forEach(category => {
			partners[category.id] = category.partners
		})
  })

Object.values(partners).forEach(categoryItems => {
  categoryItems.forEach((item, index) => {
    partnersImagesLoadState.push(false)
    item["originReady"] = partnersImagesLoadState[partnersImagesLoadState.length]
  })
})