import React, {Component, PropTypes} from "react";
import {Glyphicon, Button, Grid, Row, Col, Pagination} from "react-bootstrap";
import {createHashHistory} from 'history'
const history = createHashHistory();

class Article extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {article_init} = this.props;
        article_init();
    }

    render() {
        let aboutStyle = {textIndent: '2rem'};
        let dateStyle = {marginTop: '1rem'};

        const {articlePage, article_init, article_delete, article_add, article_edit, article_view} = this.props;
        let articles = articlePage.list;
        let add = () => {
            article_add();
            history.pushState(null, '/article/add')
        };

        let edit = (id) => {
            article_edit(id);
            history.pushState(null, '/article/edit')
        };

        let view = (id) => {
            article_view(id);
            history.pushState(null, '/article/view')
        };

        let handleSelect = (eventKey) => {
            article_init(eventKey);
        };

        return (
            <div>

                <Grid>
                    <Row >
                        <Button bsSize="small" onClick={add}><Glyphicon glyph="plus"/> Add</Button>
                    </Row>
                    {articles.map(article =>
                        <div key={article.id}>
                            <Row >
                                <Col md={6} xs={6}>
                                    <h1>
                                        <Button bsStyle="link"
                                                onClick={view.bind(this, article.id)}>{article.title}</Button>
                                    </h1>
                                </Col>
                                <Col md={6} xs={6}>
                                    <Button bsSize="xsmall" onClick={edit.bind(this, article.id)}><Glyphicon
                                        glyph="edit"/>edit</Button>
                                    <Button bsSize="xsmall" onClick={article_delete.bind(this, article.id)}>
                                        <Glyphicon glyph="trash"/>del</Button>
                                    <p>{article.createTime}</p>
                                </Col>
                            </Row>
                            <Row>
                                <div style={aboutStyle}>
                                    <p>{article.brief}</p>
                                </div>
                            </Row>
                            <hr/>
                        </div>
                    )}
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        items={articlePage.pages}
                        maxButtons={5}
                        activePage={articlePage.pageNum}
                        onSelect={handleSelect}/>
                </Grid>
            </div>

        )
    }
}
export default Article;