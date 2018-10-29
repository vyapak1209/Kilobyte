import {SEARCH_PRODUCTS} from '../actions/types'

export const searchProducts = (accessToken, query) => dispatch => {

    fetch(' https://api.ebay.com/buy/browse/v1/item_summary/search?limit=10&q=' + query, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer' + ' ' + accessToken
        }
    })
        .then((resp) => resp.json())
        .then(response => {
            console.log("Search Response ", response)
            dispatch({
                type: SEARCH_PRODUCTS,
                payload: response.itemSummaries,
                nextUrl: response.next,
            })
        })

}

