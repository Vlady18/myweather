import React from 'react'
import News from "./News";
import {connect} from "react-redux";
import {
    changeArticleIsAC,
    newsCurrentPageThunkCreator,
    newsThunkCreator,
    setNewCurrentPageAC
} from "../../redux/reducers/newsReducer";

class NewsContainer extends React.Component{
    render(){
        return <News {...this.props} />
    }
}

const mapStateToProps = (state) =>{
    return {
        newsArticles: state.news.articles,
        newsTotalCount: state.news.totalNewsCount,
        currentPage: state.news.currentPage,
        pageSize: state.news.pageSize,
        country: state.news.country,
        articleState: state.news.articleIsOpen,
        isFetch: state.news.isFetch,
    }
}
export default connect(mapStateToProps, {
    setNews: newsThunkCreator,
    setCurrentPage: newsCurrentPageThunkCreator,
    articleIsOpen: changeArticleIsAC
})(NewsContainer)
