import React from "react";
import "./index.css";
import { connect } from "react-redux";
import * as actions from "../../components/store/actions";

class Home extends React.Component<any> {
    state = {

    }

    componentDidMount() {
       this.props.initCounter()
    }

    render() {
        console.log(this.props);
        return (
            <div className="parent">

            </div>
        );
    }
}

const mapStateToProps = (state:  any) => {
    return {
        COUNTER: state.COUNTER
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        initCounter: async () => dispatch( await actions.initCounter())
    };
};

export default(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home))
