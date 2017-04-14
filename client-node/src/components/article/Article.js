import React, {Component, PropTypes} from "react";
import {browserHistory} from 'react-router';
import {Glyphicon, Grid, Button, Form, FormGroup, FormControl, Checkbox, Col} from "react-bootstrap";
import { URL_ARTICLE_SAVE} from '../../constants/AppConfig'
import {createHashHistory} from 'history'
const history = createHashHistory();

class ArticleAdd extends Component {

    render() {
        const {article, view} = this.props;
        let handleInput = function (name, event) {
            article[name] = event.target.value || '';
            this.setState({article: article});
        };

        let validationState = function (name) {
            let value = article[name] || '';
            return '' == value ? 'error' : null;
        };

        let handleSubmit = function () {
            for (let key in article) {
                if ('id' == key)continue;
                if (validationState(key) != null) return;
            }
            let promise = $.ajax({
                url: URL_ARTICLE_SAVE,
                data: JSON.stringify(article),
                dataType: 'json',
                type: 'post',
                contentType: 'application/json;charset=utf-8'
            });
            promise.done(function (vo) {
                if (vo.ok) history.pushState(null, '/article/')
            }.bind(this));
            promise.fail(function (error) {
                console.log(error)
            });
        };
        return (
            <Grid>
                <Button bsSize="small" href="#/article/">
                    <span className="glyphicon glyphicon-arrow-left"/> Back</Button>
                <Form horizontal>
                    <FormGroup controlId="title" validationState={validationState('title')}>
                        <Col sm={2}> 标题 </Col>
                        <Col sm={10}> <FormControl type="text" placeholder="title" id="title"
                                                   readOnly={view}
                                                   value={article.title}
                                                   onChange={handleInput.bind(this, 'title')}/> </Col>
                    </FormGroup>
                    <FormGroup controlId="brief" validationState={validationState('brief')}>
                        <Col sm={2}> 简介 </Col>
                        <Col sm={10}> <FormControl type="text" placeholder="brief"
                                                   readOnly={view}
                                                   value={article.brief}
                                                   onChange={handleInput.bind(this, 'brief')}/> </Col>
                    </FormGroup>
                    <FormGroup controlId="content" validationState={validationState('content')}>
                        <Col sm={2}> 内容 </Col>
                        <Col sm={10}> <FormControl componentClass="textarea" placeholder="content"
                                                   readOnly={view}
                                                   value={article.content}
                                                   onChange={handleInput.bind(this, 'content')}/> </Col>
                    </FormGroup>
                    {view ? null : <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button bsSize="small" onClick={handleSubmit.bind(this)}> 提交 </Button>
                            </Col>
                        </FormGroup>
                    }
                </Form>
            </Grid>
        );
    }
}
export default ArticleAdd;