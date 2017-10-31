import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3-shape';

// Recieves { data = [1, 2, 3, ...], width = height }
export default class LineHolder extends React.Component {
    constructor(props) {
        super(props);
        this.makePie = this.makePie.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        
        this.colors = ['#e41a1c','#377eb8'];
        
    
        this.state = {
            selected : null
        };
    }
   
    makePie() {
        const width = this.props.width;
        return d3
            .line()
            .x(function(d) { return x(d.base_volume); })
            .y(function(d) { return y(d.counter_volume); });
    }
    
    onMouseOver(e) {
        this.setState({
            selected: this.props.data[+e.target.id]
        });
    }

    onMouseOut(e) {
        this.setState({ selected : null });
    }
    
    render() {
        const paths = this.makePie().map((d, i) => {
            return (
                <path key={i}
                    d={d}
                    id={i}
                    onMouseOut={this.onMouseOut}
                    onMouseOver={this.onMouseOver}
                    style={{fill: this.colors[i], opacity: "0.8"}}/>);
        });
        const label = (<text x={-25} y={0}>{ this.state.selected !== null ? "Datum " + this.state.selected : "" }</text>)
        return (
            <div>
                <svg height={this.props.height}
                    width={this.props.width}>
                    <g transform={`translate(${this.props.width / 2},${this.props.width / 2})`}>
                    { label }
                    { paths }
                    </g>
                </svg>
            </div>
        );
    }
}
