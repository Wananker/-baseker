import React, {Component, PropTypes} from "react";
import {Button, Grid, Row, Col} from "react-bootstrap";
import Song from "../song/Song";

class Home extends Component {

    render() {
        const {alertVisible, show_alert, hide_alert} = this.props;
        return (
            <Grid>
                <Row>
                    <Col md={6}> <Song/></Col>
                </Row>
                <Button bsSize="small" onClick={hide_alert}>close</Button>
                <Button bsSize="small" onClick={show_alert}>show</Button>
            </Grid>
        )
    }
}
export default Home;