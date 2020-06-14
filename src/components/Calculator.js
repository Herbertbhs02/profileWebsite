import React from "react";
import * as math from "mathjs";
import Button from "./Button";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
  }
  change = e => {
    let x = this.state.result + e;
    let num = x
      .replace("..", ".")
      .replace("//", "/")
      .replace("**", "*")
      .replace("--", "-")
      .replace("/*", "/")
      .replace("/-", "/")
      .replace("/+", "/")
      .replace("*/", "*")
      .replace("*-", "*")
      .replace("*+", "*")
      .replace("-/", "-")
      .replace("-*", "-")
      .replace("-+", "-")
      .replace("+/", "+")
      .replace("+*", "+")
      .replace("+-", "+");

    this.setState({ result: num });
  };
  Calc = () => {
    let l = this.state.result;
    let ch = l[l.length - 1];
    let ch0 = l[0];
    if (isNaN(ch) || isNaN(ch0)) {
      this.setState({ result: this.state.result });
    } else {
      this.setState({ result: math.eval(this.state.result) });
    }
  };

  Clear = () => {
    this.setState({ result: "" });
  };
  render() {
    return (
      <div className="App">
        <h3>
          Calculator
        </h3>
        <input type="text" className="input" value={this.state.result} />
        <br />
        <div>
          <div>
            <Button oper={this.change}>7</Button>
            <Button oper={this.change}>8</Button>
            <Button oper={this.change}>9</Button>
            <Button oper={this.change}>/</Button>
          </div>

          <div>
            <Button oper={this.change}>4</Button>
            <Button oper={this.change}>5</Button>
            <Button oper={this.change}>6</Button>
            <Button oper={this.change}>*</Button>
          </div>

          <div>
            <Button oper={this.change}>1</Button>
            <Button oper={this.change}>2</Button>
            <Button oper={this.change}>3</Button>
            <Button oper={this.change}>-</Button>
          </div>

          <div>
            <Button oper={this.change}>0</Button>
            <Button oper={this.change}>.</Button>
            <Button oper={this.change}>9</Button>
            <Button oper={this.change}>+</Button>
          </div>

          <div>
            <Button oper={this.Calc}>=</Button>
            <Button oper={this.Clear}>C</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
