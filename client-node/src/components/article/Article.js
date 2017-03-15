import React, {Component, PropTypes} from "react";
import {browserHistory} from 'react-router';
import {Glyphicon, Grid, Button, Form, FormGroup, FormControl, Checkbox, Col} from "react-bootstrap";
import {URL_ARTICLE_LIST, URL_ARTICLE_VIEW, URL_ARTICLE_DELETE, URL_ARTICLE_SAVE} from '../../constants/AppConfig'
import {createHashHistory} from 'history'
const history = createHashHistory();

class ArticleAdd extends Component {

    componentWillMount() {
        const {article_edit} = this.props;
        let id = this.props.params.id || '';
        if ('' != id) {
            let promise = $.ajax(URL_ARTICLE_VIEW + id);
            promise.done(function (vo) {
                article_edit(vo);
            });
            promise.fail(function (error) {
                console.log(error)
            });
        }
    }


    render() {
        const {article, validationState} = this.props;

        let handleInput = function (name, event) {
            let value = event.target.value || '';
            article[name] = value;
            this.setState({article: article});
            if ('' == value) {
                validationState[name] = 'error';
            } else {
                validationState[name] = null;
            }
            this.setState({validationState: validationState});
        };

        let handleSubmit = function () {
            for (let key in article) {
                if (article[key] == null && key in validationState) {
                    validationState[key] = 'error';
                    this.setState({validationState: validationState});
                    return;
                }
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
                    <FormGroup controlId="title" validationState={validationState.title}>
                        <Col sm={2}> 标题 </Col>
                        <Col sm={10}> <FormControl type="text" placeholder="title" ref="title"
                                                   value={article.title}
                                                   onChange={handleInput.bind(this, 'title')}/> </Col>
                    </FormGroup>
                    <FormGroup controlId="brief" validationState={validationState.brief}>
                        <Col sm={2}> 简介 </Col>
                        <Col sm={10}> <FormControl type="text" placeholder="brief"
                                                   value={article.brief}
                                                   onChange={handleInput.bind(this, 'brief')}/> </Col>
                    </FormGroup>
                    <FormGroup controlId="content" validationState={validationState.content}>
                        <Col sm={2}> 内容 </Col>
                        <Col sm={10}> <FormControl componentClass="textarea" placeholder="content"
                                                   value={article.content}
                                                   onChange={handleInput.bind(this, 'content')}/> </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsSize="small" onClick={handleSubmit.bind(this)}> 提交 </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        );
    }
}
export default ArticleAdd;