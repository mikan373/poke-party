import React, { useState, useEffect } from 'react';
import './Party.css'

function Party({ party, setParty }){　　　//現在のpartyに持たせる機能とレンダリングについてのコンポーネント。
    //remove機能…現在のpartyからクリックしたものを削除。
    const removeFromParty = (index) => {
        let newParty = [...party];
        newParty.splice(index, 1);
        setParty(newParty);
    }
    //現在のparty全ての右側に画像、左側に名前・タイプ画像の表示・removeボタンを作成する。
    return(
      <div className="content_my-party">
        <h3 className="content_my-party-title">Party</h3>
        {　// map(value, index) 1つ目の引数は配列の値、2つ目はインデックス番号
          party.map((p, i) => {
            return (
              <div className="content_my-party_pokemon">
                <div className="left"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(p.Number)}.png` } />
                </div>
                <div className="right"><p>{p.Name}</p><div className="right-icon">{p.Types.map((value) => <img src={`/icons/${value}.png`} width="30" />)}</div><button className="button" onClick={() => removeFromParty(i)}>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
}
export default Party;