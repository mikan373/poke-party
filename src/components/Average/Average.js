import React from 'react';
import './Average.css'
import { Progress } from 'reactstrap';

function Average(props){　　　//現在のコンポーネントの平均CP・HPを表示するコンポーネント
    const averageMaxCPHP = () => {
      if(props.party.length > 0){
        let total = props.party.reduce(function(sum, elem){
          return sum + elem[props.keyName];
        },0)
        return Math.floor(total / props.party.length)
      }
      return 0
    }
  
    return (
      <div className="analysis_CPHP">
        <p>{props.caption}</p>
        <Progress min={0} max={3000} value={averageMaxCPHP()}>{`${averageMaxCPHP()}`}</Progress>
      </div>
    )
}

export default Average;