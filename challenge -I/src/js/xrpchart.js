import axios from 'axios';
import PieHolder from "./piecharts";
import LineHolder from "./piecharts";
import * as Data from "./data";

export default class XrpChart extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            external_markets : [],
            exchange_volume :[]
        };
		}

componentDidMount() {
  		this.setState({
     external_markets : Object.assign({},Data.goFetch("https://data.ripple.com/v2/network/external_markets?&period=day")),
     exchange_volume : Object.assign({},Data.goFetch("https://data.ripple.com/v2/network/exchange_volume?&amp;limit=1000&amp;live=day"))
    });
  }

 render() {
    return(
      <div>
  (external_markets['rows'][0]['components']).map(function(component,key){
  <div id={key}>
    <span><lable>Rate</lable>{(external_markets['rows'][0]['components'][component]['rate'])}</span>
    <PieHolder width={400} height={400} data={[external_markets['rows'][0]['components'][component]['amount'] , external_markets['rows'][0]['components'][component]['converted_amount']]}/>
    <span><lable>Currency</lable>{(external_markets['rows'][0]['components'][component]['base']['currency'])}</span>
  });

  (exchange_volume['data']['components']).map(function(component,key){
    <div>
    <span><lable>source</lable>{exchange_volume['data']['components'][component]['source']}</span>
    <LineHolder width={400} height={400} data={[exchange_volume['data']['components'][component]['counter_volume'],exchange_volume['data']['components'][component]['base_volume']]}/>
    <span><lable>Rate</lable>{[exchange_volume['data']['components'][component]['rate']}</span>
    </div>
  });
  
  
  </div>
  );
}
}