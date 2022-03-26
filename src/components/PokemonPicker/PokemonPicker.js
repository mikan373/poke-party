import React, { useState, useEffect } from 'react';
import './PokemonPicker.css'
import { allPokemon } from '../../allPokemon.js';

function PokemonPicker(props){    //全てのポケモンリストに関するコンポーネント。
  //mapを使い、全てのポケモンについてPokemonButtonを作成する 
  return (<>
  {
    allPokemon.map((p) => <PokemonButton party={props.party} setParty={props.setParty} pokemon={p} />)
  }
  </>)
}

function PokemonButton(props){　　　//1つのボタンの機能とレンダリングについて記載したコンポーネント。
  //addToParty機能…setPartyを、現在のpartyにPokemonButtonで選択したポケモンを追加した配列とする
  const addToParty = () => {
    if(props.party.length < 6) {
      props.setParty([...props.party, props.pokemon]);　　　
    }
  }
  //addToParty機能を持ったボタンを作成。
  return (
   <button onClick={addToParty} className="button-pokemon">
   <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(props.pokemon.Number)}.png`} />
   </button>
  )
}

export default PokemonPicker