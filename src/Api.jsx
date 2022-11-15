import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [num, setNum] = useState();
  const [data, setData] = useState();
  async function getData() {
    if(!num) return
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log(res.data);
    console.log(res.data.name); 
    console.log(res.data.order);
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, [num]);

  return (
    <>
      <div>

        <h1>You Choose {num} Value</h1>
        <h1 style={{ color: "red", text: "bold" }}>I am {data?.name}</h1>
        <h1 style={{color: "blue"}}>i have {data?.order}</h1>
        <h1 style={{color: "skyblue"}}>heavy {data?.weight} </h1>
        <div>
        <img  src={data?.image}/>
        <p>{data?.species.url}</p>
        </div>
        <select
          style={{ width: "5%", paddingTop: "5px", paddingBottom: "5px" }}
          value={num}
          onChange={(event) => {
            setNum(event.target.value);
          }}
        >
          <option value={num}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </>
  );
}

export default Api;
