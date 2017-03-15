import React, {Component, PropTypes} from "react";
import {Glyphicon,Button, Grid, Row, Col} from "react-bootstrap";
import {ARTICLE_LIST, ARTICLE_VIEW, ARTICLE_DELETE, ARTICLE_SAVE} from '../../constants/AppConfig'

class Article extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount this.props ↓');
        console.log(this.props);
        const {article_list} = this.props;
        let promise = $.ajax(ARTICLE_LIST);
        promise.done(function (vo) {
            article_list(vo);
        }.bind(this));
        promise.fail(function (error) {
            console.log(error)
        });
    }

    render() {
        let aboutStyle = {textIndent: '2rem'};
        let dateStyle = {marginTop: '1rem'};
        console.log('this.props ↓');
        console.log(this.props);
        const {articles} = this.props;

        return (
            <Grid>
                <Button bsSize="small" href="#/article/add"><Glyphicon glyph="plus"/> Add</Button>
                {articles.map(article =>
                    <div key={article.id}>
                        <Row >
                            <Col md={8}><h1><Button bsStyle="link">{article.title}</Button></h1></Col>
                            <Col md={2}>
                                <Button bsSize="small"><Glyphicon glyph="edit"/> Edit</Button>
                                <Button bsSize="small"><Glyphicon glyph="trash"/> Delete</Button>
                            </Col>
                            <Col md={2} style={dateStyle}> {article.createTime}</Col>
                        </Row>
                        <Row>
                            <div style={aboutStyle}>
                                <p>{article.brief}</p>
                            </div>
                        </Row>
                        <hr/>
                    </div>
                )}
            </Grid>
        )
    }
}
export default Article;