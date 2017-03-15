import React, {Component, PropTypes} from "react";
import {browserHistory} from 'react-router';
import {Grid, Button, Form, FormGroup, FormControl, Checkbox, Col} from "react-bootstrap";
import {ARTICLE_LIST, ARTICLE_VIEW, ARTICLE_DELETE, ARTICLE_SAVE} from '../constants/AppConfig'

class ArticleAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {
                id: this.props.params.id, title: null, brief: null, content: null
            },
            validationState: {
                title: null, brief: null, content: null
            }


        };
    }

    componentWillMount() {
        let id = this.props.params.id || '';
        if ('' != id) {
            let promise = $.ajax(ARTICLE_VIEW + this.state.article.id);
            promise.done(function (article) {
                this.setState({article: article})
            }.bind(this));
            promise.fail(function (error) {
                console.log(error)
            });
        }
    }


    render() {
        const {article, validationState} = this.state;

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
                url: ARTICLE_SAVE, data: JSON.stringify(article), dataType: 'json', type: 'post', contentType: 'application/json;charset=utf-8'
            });
            promise.done(function () {
                browserHistory.push('#/article/')
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