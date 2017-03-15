import React, {Component, PropTypes} from "react";
import {Button, Grid, Row, Col} from "react-bootstrap";
import Song from "../components/song/Song";

class Home extends Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}> <Song/></Col>
                </Row>
                <Button bsSize="small" onClick={() => this.setState({alertVisible: false})}>close</Button>
            </Grid>
        )
    }
}
export default Home;