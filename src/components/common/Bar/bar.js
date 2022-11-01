import React from "react";
import { select } from "d3-selection";

class Bar extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.init = this.init.bind(this);
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.barTransition();
  }
  barTransition() {
    const node = this.ref.current;
    const { yScale, height, data, t } = this.props;

    select(node)
      .selectAll(".bar")
      .data(data)
      .transition(t)
      .attr("y", (d) => yScale(d.value))
      .attr("height", (d) => height - yScale(d.value));
  }
  init() {
    const { xScale, data, height } = this.props;
    const node = this.ref.current;

    const initialData = data.map((obj) => ({
      name: obj.name,
      value: 0
    }));

    const bar = select(node).selectAll(".bar").data(initialData);

    bar
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.name))
      .attr("y", height)
      .attr("width", xScale.bandwidth());

    this.barTransition();
  }
  render() {
    return <g className="bar-group" ref={this.ref} />;
  }
}

export default Bar;
