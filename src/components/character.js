import React from 'react'

export default function Character({ name, japaneseName, group, quote, image }) {
    return (
        <div className="flex" style={{justifyContent: "start", alignItems: "center"}}>
            <img src={image} alt="img" width={200} height={300} />

            <div className="description">
                <h2>{name}</h2>
                <br></br>
                <h3>{japaneseName}</h3>
                <h3>{group}</h3>
                <h3>{quote}</h3>
            </div>
        </div>
    )
}