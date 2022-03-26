import React from 'react';
import './ResistantAndWeakness.css'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function ResistantAndWeakness({party}){
  const makeData = (party) => {

    let  countedTypes = {}; 
    for (let i=0; i<party.length; i++){　　　　//type別にカウントしcountedTypesとしてまとめる
      for (let j=0; j<party[i]["Resistant"].length; j++){
      let key = party[i]["Resistant"][j];
      countedTypes[key] = (countedTypes[key] || 0) + 1;　　　
      }

      for (let j=0; j<party[i]["Weaknesses"].length; j++){
        let key = party[i]["Weaknesses"][j];
        countedTypes[key] = (countedTypes[key] || 0) - 1;　
      }
    }

    let labels = ['Bug', 'Electric', 'Fairy', 'Fighitng', 'Fire', 'Flying', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
    let data = new Array(labels.length).fill(0);

    for (const [key, value] of Object.entries(countedTypes)) {
      let dataIndex = labels.indexOf(key);
      data[dataIndex] = value;
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'Effectiveness',
          data: data,
          backgroundColor: '#0d6efd91',
          borderColor: '#0d6efd',
          borderWidth: 1,
        },
      ],
    }
  }
  return (
    <Radar data={makeData(party)} options={{
      scale: {
        ticks: {
            max: 7,
            min: -7,
            stepSize: 1,
        }
    },
    }} />
  )
}



// function ResistantAndWeakness(props){
//     const createTable = () => {
      
//       let  countedTypes = {};
//       for (let i=0; i<props.party.length; i++){　　　　//type別にカウントしcountedTypesとしてまとめる
//         for (let j=0; j<props.party[i][props.keyName].length; j++){
//         let key = props.party[i][props.keyName][j];
//         countedTypes[key] = countedTypes[key] + 1;　　　
//         //countedTypes[key]が定義されている(例えば、すでにWaterというキーで値が存在する)場合はcountedTypes[key]が、定義されていなければ0がセットされ、それに１を足す
//         }
//       }
//       console.log(countedTypes);
  
//       let table = [];
//       const collect = (obj, value) => {　　　　//valueでcountedTypesにフィルターをかけ、keyを配列化
//         return Object.keys(obj).filter(key => obj[key] === value);
//       }
//       for (let i=6; i>=1; i--){
//         if(collect(countedTypes, i).length === 0){
//           continue;
//         }
//         table.push(<tr><td>{`${i}ポイント`}</td><td>{`${collect(countedTypes, i)}`}</td></tr>)
//       }
//       return table;
//     }
    
//     return (
//       <table className="analysis_strength">
//         <caption>{props.caption}</caption>
//         <tr>{createTable()}</tr>
//       </table>
//     )
//}

export default ResistantAndWeakness;