import connect from "react-redux/es/connect/connect";
import BarChart from "./component/BarChart";

const mapStateToProps = ({items}) => ({
    items: items,
});

export default connect(mapStateToProps, null)(BarChart);