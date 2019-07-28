import {API} from "../../api/Api";

const SET_NEWS = 'SET_NEWS'
const SET_TOTAL_NEWS = 'SET_TOTAL_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const CHANGE_ARTICLE_OPEN = 'CHANGE_ARTICLE_OPEN'
const IS_FETCH_NEWS = 'IS_FETCH_NEWS'

const initialstate = {
    articles: [],
    pageSize: 5,
    totalNewsCount: null,
    currentPage: 1,
    country: null,
    articleIsOpen: false,
    isFetch: false
}

const newsReducer = (state=initialstate, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                articles: action.news,
                country: action.country,
                currentPage: 1
            }
        case SET_TOTAL_NEWS:
            return {
                ...state,
                totalNewsCount: action.total
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
            case CHANGE_ARTICLE_OPEN:
            return {
                ...state,
                articleIsOpen: action.bool
            }
            case IS_FETCH_NEWS:
            return {
                ...state,
                isFetch: action.bool
            }
        default:
            return state
    }
}


const setNewsAC = (news, country) =>{
    return{
        type: SET_NEWS,
        news,
        country
    }
}
const setTotalNewsAC = (total) =>{
    return{
        type: SET_TOTAL_NEWS,
        total
    }
}

const setNewCurrentPageAC = (page) =>{
    return{
        type: SET_CURRENT_PAGE,
        page
    }
}
export const changeArticleIsAC = (bool) =>{
    return{
        type: CHANGE_ARTICLE_OPEN,
        bool
    }
}

export const changeFetchNews = (bool) =>{
    return{
        type: IS_FETCH_NEWS,
        bool
    }
}

export const newsCurrentPageThunkCreator = (country, page) =>(dispatch)=>{
    API.changeCurrentPage(country, page).then(response=> {
            dispatch(setTotalNewsAC(response.totalResults))
            dispatch(setNewsAC(response.articles, country))
            dispatch(setNewCurrentPageAC(page))
        }
    )
}

export const newsThunkCreator = (country, page) =>(dispatch)=>{
    dispatch(changeFetchNews(true))
    API.getNews(country, page).then(response=> {
            dispatch(setTotalNewsAC(response.totalResults))
            dispatch(changeFetchNews(false))
            dispatch(setNewsAC(response.articles, country))
    }
    )
}

export default newsReducer


