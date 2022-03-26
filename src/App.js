import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Party from './components/Party/Party';
import PokemonPicker from './components/PokemonPicker/PokemonPicker';
import Average from './components/Average/Average';
import ResistantAndWeakness from './components/ResistantAndWeakness/ResistantAndWeakness';

function App() {　　　//全体をレンダリングするコンポーネント。
  const [party, setParty] = useState([]);   //[現在の値, 更新関数]
  
  return (
    <div>
      <div className="content">
        <Party　party={party} setParty={setParty}/>
        <div className="content_analysis">
          <h3 className="content_analysis-title">Analysis</h3>
          <Average party={party} keyName="MaxCP" caption="Average Max CP" />
          <Average party={party} keyName="MaxHP" caption="Average Max HP" />
          <ResistantAndWeakness party={party} />
        </div>

      </div>
      <div className="pokemon-buttons">
        <PokemonPicker party={party} setParty={setParty} />
      </div>
      
    </div>
  );
}

export default App;




// function App() {　　　//全体をレンダリングするコンポーネント。
//   const [party, setParty] = useState([]);   //[現在の値, 更新関数]

//   useEffect(() => {
//     console.log(party)
//   }, [party])

//   return (
//     <div>
//       <div className="content">
//         <Party　party={party} setParty={setParty}/>
//         <div className="content_analysis">
//           <h3 className="content_analysis-title">Analysis</h3>
//           <Average party={party} keyName="MaxCP" caption="Average Max CP" />
//           <Average party={party} keyName="MaxHP" caption="Average Max HP" />
//           <ResistantAndWeakness party={party} keyName="Resistant" caption="This party's Resistant" />
//           <ResistantAndWeakness party={party} keyName="Weaknesses" caption="This party's Weaknesses" />
//         </div>

//       </div>
//       <div className="pokemon-buttons">
//         <PokemonPicker party={party} setParty={setParty} />
//       </div>
      
//     </div>
//   );
// }

// export default App;