import React from 'react';

class MultipleChoiceResults extends React.Component{
  render(){

    let total =
      this.props.results.a.length +
      this.props.results.b.length +
      this.props.results.c.length +
      this.props.results.d.length;

    let aPercent = this.props.results.a.length/total;
    let bPercent = this.props.results.b.length/total;
    let cPercent = this.props.results.c.length/total;
    let dPercent = this.props.results.d.length/total;

    function classMeUp(input){
      if(input === Math.max(aPercent, bPercent, cPercent, dPercent)){
        return 'winner'
      } else {
        return ''
      }
    }

    function calcStyle(decimal){
      return {
        width: decimal*100 + "%"
      }
    }

    return(
        <ul className="results">
        {(this.props.options.a) ?
          <li>
            <h5>{this.props.options.a}</h5>
            <div className={classMeUp(aPercent)} style={calcStyle(aPercent)}><span>{parseInt(aPercent*100)}%</span></div>
          </li>
        : null}
        {(this.props.options.b) ?
          <li>
            <h5>{this.props.options.b}</h5>
            <div className={classMeUp(bPercent)} style={calcStyle(bPercent)}><span>{parseInt(bPercent*100)}%</span></div>
          </li>
        : null}
        {(this.props.options.c) ?
          <li>
            <h5>{this.props.options.c}</h5>
            <div className={classMeUp(cPercent)} style={calcStyle(cPercent)}><span>{parseInt(cPercent*100)}%</span></div>
          </li>
        : null}
        {(this.props.options.d) ?
          <li>
            <h5>{this.props.options.d}</h5>
            <div className={classMeUp(dPercent)} style={calcStyle(dPercent)}><span>{parseInt(dPercent*100)}%</span></div>
          </li>
        : null}
        </ul>
    )
  }
}

export default MultipleChoiceResults;
