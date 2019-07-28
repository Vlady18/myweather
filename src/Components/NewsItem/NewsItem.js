import React from 'react'
import { Image, Item, Container, Button } from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import classes from './NewsItem.module.css'
const imageNews = 'https://image.flaticon.com/icons/png/512/21/21601.png'

const ItemExampleItems = (props) => {
    // let openArticleHandler = () =>{
    //     props.articleIsOpen(true)
    // }
    return (
        <Container>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={props.article.urlToImage || imageNews } />

                    <Item.Content>
                            <Item.Header as='a' href={props.article.url} target="_blank">{props.article.title}</Item.Header>
                        <Item.Meta>{props.article.publishedAt.substring(0,10) + ' / ' + props.article.publishedAt.substr(11, 8)}</Item.Meta>
                        <Item.Description>
                            {props.article.description}
                        </Item.Description>
                        <Item.Extra>{props.article.author}</Item.Extra>
                        {/*<div className={classes.button_more}>*/}
                        {/*    <button className="ui primary button" onClick={openArticleHandler}>Primary</button>*/}
                        {/*</div>*/}
                    </Item.Content>
                </Item>
            </Item.Group>
        </Container>
    )

}

export default ItemExampleItems