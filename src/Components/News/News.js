import React from 'react'
import {API} from "../../api/Api";
import classes from './News.module.css'
import ItemExampleItems from "../NewsItem/NewsItem";
import Loader from "../Loader/Loader";


class News extends React.Component{
    // componentWillUnmount(){
    //     this.props.setNews(null, null)

    // }
    // componentDidMount() {
    //     this.props.setNews()
    // }
    countryChange =(e) =>{
        this.props.setNews(e.target.value, this.props.currentPage)
    }
    setNewCurrentPage = (page) =>{
        this.props.setCurrentPage(this.props.country, page)
    }
    render(){
        let pageCount = Math.ceil(this.props.newsTotalCount / this.props.pageSize)
        let pages = []
        for(var i = 1; i <= pageCount; i++){
            pages.push(i)
        }
        return(
            <div className={classes.News}>
                <select className={classes.Select} name="countryNews" id="" onChange={this.countryChange}>
                    <option value="" disabled selected>Select country</option>
                    <option value="ru">Russia</option>
                    <option value="us">United State</option>
                    <option value="fr">France</option>
                </select>
                <ul className={classes.newsCont}>
                    {
                        this.props.isFetch
                        ?
                        <Loader />
                        :
                        this.props.newsArticles.map(article => {
                            return (
                                <li>
                                    <ItemExampleItems
                                        articleState={this.props.articleState}
                                        articleIsOpen={this.props.articleIsOpen}
                                        article={article}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={classes.pagination}>
                    <ul>
                        {
                            this.props.isFetch
                                ?
                                null
                                :
                            pages.map(page=>{
                                return(
                                    <li onClick={() => this.setNewCurrentPage(page)} className={this.props.currentPage === page ? classes.current : null}>{page}</li>
                                )
                            })
                        }
                    </ul>
                </div>
        </div>
    )
    }
}
export default News