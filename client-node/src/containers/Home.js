import React, {Component, PropTypes} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Song from "../components/song/Song";

class Home extends Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}> <Song/></Col>
                </Row>
            </Grid>
        )
    }
}
export default Home;