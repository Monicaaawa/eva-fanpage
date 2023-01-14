import React from "react";
import Layout from "../components/layout";
import { Grid } from '@mui/material';
import Character from "../components/character";
import eva0 from "../images/eva0.jpg";
import eva from "../images/eva.jpg";
import eva1 from "../images/eva1.jpg";
import eva2 from "../images/eva2.jpg";
import eva3 from "../images/eva3.jpg";
import eva8 from "../images/eva8.jpg";
import eva13 from "../images/eva13.jpg";

const evangelionInfo = [
  { name: "Evangelion Unit-00", japaneseName: "Rei Ayanami", image: eva0 },
  { name: "Evangelion Unit-01", japaneseName: "Shinji Ikari", image: eva1 },
  { name: "Evangelion Unit-02", japaneseName: "Asuka Langley Soryu", image: eva2 },
  { name: "Evangelion Unit-03", japaneseName: "Tōji Suzuhara", image: eva3 },
  { name: "Evangelion Production Model Custom Type-08", japaneseName: "Mari Makinami Illustrious", image: eva8 },
  { name: "Evangelion 13", japaneseName: "Shinji Ikari & Kaworu Nagisa", image: eva13 },
  { name: "Mass Production Evangelion", japaneseName: "", image: eva },
]

const Evangelions = () => {
  return (
    <Layout>
        <div id="evangelionBanner">
            <div className="eva-heading">
                <h1 class="eva-heading__title">EVANGELIONS</h1>
            </div>
        </div>
      
        <div className="bg">
        <Grid container spacing={1} rowSpacing={12}>
                  {evangelionInfo.map((evangelion) => (
                      <Grid item xs={4}>
                          <Character name={evangelion.name} japaneseName={evangelion.japaneseName} group={evangelion.group} image={evangelion.image} />
                      </Grid>
                  ))}
        </Grid>
      </div>

    </Layout>
  )
}

export default Evangelions