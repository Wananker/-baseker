import React, {Component, PropTypes} from "react";

class About extends Component {
    render() {
        var aboutStyle ={textIndent: '2rem'}

        return (
            <div style={aboutStyle}>
                <h1>为人民服务</h1>
                <p>我们都是来自五湖四海，为了一个共同的革命目标，走到一起来了。我们还要和全国大多数人民走这一条路。我们今天已经领导着有九千一百万人口的根据地⑷，但是还不够，还要更大些，才能取得全民族的解放。我们的同志在困难的时候，要看到成绩，要看到光明，要提高我们的勇气。中国人民正在受难，我们有责任解救他们，我们要努力奋斗。要奋斗就会有牺牲，死人的事是经常发生的。但是我们想到人民的利益，想到大多数人民的痛苦，我们为人民而死，就是死得其所。不过，我们应当尽量地减少那些不必要的牺牲。我们的干部要关心每一个战士，一切革命队伍的人都要互相关心，互相爱护，互相帮助。 </p>
            </div>
        )
    }
}
export default About;