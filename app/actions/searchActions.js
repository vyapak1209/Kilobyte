import {SEARCH_PRODUCTS} from '../actions/types'

export const searchProducts = (accessToken, query, nextUrl) => dispatch => {

    let urlToAppend = (nextUrl === null) ? ' https://api.ebay.com/buy/browse/v1/item_summary/search?limit=10&q=' + query : nextUrl
    fetch(urlToAppend, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer' + ' ' + accessToken
        }
    })
        .then((resp) => resp.json())
        .then(response => {
            console.log("Search Response ", response)
            if(nextUrl === null){
                dispatch({
                    type: SEARCH_PRODUCTS,
                    payload: response.itemSummaries,
                    nextUrl: response.next,
                })
            }else{
                dispatch({
                    type: SEARCH_PRODUCTS,
                    payload: response.itemSummaries,
                    nextUrl: response.next,
                    lazyLoad: true
                })
            }
        })

}

