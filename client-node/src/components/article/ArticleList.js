import React, {Component, PropTypes} from "react";
import {Glyphicon, Button, Grid, Row, Col} from "react-bootstrap";

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

        const {articles, article_delete} = this.props;

        return (
            <Grid>
                <Button bsSize="small" href="#/article/add"><Glyphicon glyph="plus"/> Add</Button>
                {articles.map(article =>
                    <div key={article.id}>
                        <Row >
                            <Col md={8}><h1><Button bsStyle="link" href={"#/article/view/" + article.id}>{article.title}</Button></h1></Col>
                            <Col md={2}>
                                <Button bsSize="small" href={"#/article/edit/" + article.id}><Glyphicon glyph="edit"/>
                                    Edit</Button>
                                <Button bsSize="small" onClick={article_delete.bind(this, article.id)}><Glyphicon
                                    glyph="trash"/>
                                    Delete</Button>
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