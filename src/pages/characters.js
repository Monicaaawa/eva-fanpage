import React from "react";
import Layout from "../components/layout";
import { Grid } from '@mui/material';
import Character from "../components/character";
import shinji from "../images/shinji.jpg";
import asuka from "../images/asuka.jpg";
import rei from "../images/rei.jpg";
import kaworu from "../images/kaworu.jpg";
import mari from "../images/mari.jpg";
import gendo from "../images/gendo.jpg";
import misato from "../images/misato.jpg";
import kaji from "../images/kaji.jpg";

const characterInfo = [
  { name: "Shinji Ikari", japaneseName: "碇 シンジ", group: "Children", quote: "逃げちゃダメだ！", image: shinji },
  { name: "Rei Ayanami", japaneseName: "綾波 レイ", group: "Children", quote: "これが涙。泣いているのは私？", image: rei },
  { name: "Asuka Langley Soryu", japaneseName: "惣流・アスカ・ラングレー", group: "Children", quote: "あんたバカァ？", image: asuka },
  { name: "Kaworu Nagisa", japaneseName: "渚 カヲル", group: "Children", quote: "今度こそ君だけは… 幸せにしてみせるよ。", image: kaworu },
  { name: "Mari Makinami Illustrious", japaneseName: "真希波・マリ・イラストリアス", group: "Children", quote: "仰せの通りに、お姫さま！", image: mari },
  { name: "Gendo Ikari", japaneseName: "碇 ゲンドウ", group: "NERV Staff", quote: "エヴァに乗れ。", image: gendo },
  { name: "Misato Katsuragi", japaneseName: "葛城 ミサト", group: "NERV Staff", quote: "大人のキスよ。", image: misato },
  { name: "Ryoji Kaji", japaneseName: "加持 リョウジ", group: "NERV Staff", quote: "彼女の寝相の悪さ、直ってる？", image: kaji }
]

function Characters(props) {
  return (
    <Layout>
      <div id="characterBanner">
        <div className="eva-heading">
          <h1 class="eva-heading__title">CHARACTERS</h1>
        </div>
      </div>

      <div className="bg">
        <Grid container spacing={1} rowSpacing={12}>
                  {characterInfo.map((character) => (
                      <Grid item xs={6}>
                          <Character name={character.name} japaneseName={character.japaneseName} group={character.group} quote={character.quote} image={character.image} />
                      </Grid>
                  ))}
        </Grid>
      </div>
      
  
    </Layout>
  )
}

export default Characters