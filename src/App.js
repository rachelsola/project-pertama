import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import "./App.css";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  const [warnaKotak, setWarnaKotak] = useState("red");
  const [hitungKlik, setHitungKlik] = useState(0);
  const [kondisi, setKondisi] = useState("");

  //array
  const [arrayKotak, setArrayKotak] = useState([
    { id: 1, warnaKotak: getRandomColor(), kata: "Hello World" },
    { id: 2, warnaKotak: getRandomColor(), kata: "Hello Jogja" },
    { id: 3, warnaKotak: getRandomColor(), kata: "Hello Semarang" },
    { id: 4, warnaKotak: getRandomColor(), kata: "Hello Jakarta" },
  ]);

  //arrayKotak.map(() => (x,y))
  const listKotak = arrayKotak.map((dataKotak, i) => (
    <div
      onClick={() => {
        //alert(dataKotak.id);
        //console.log(dataKotak.id);
        //deleteArray(dataKotak.id);
        editArray(i, dataKotak.id);
      }}
      onDoubleClick={() => {
        deleteArray(dataKotak.id);
      }}
      style={{
        width: "100%",
        height: "12rem",
        backgroundColor: dataKotak.warnaKotak,
      }}
    >
      <b>
        Index: {dataKotak.kata}, ID: {dataKotak.id}, INDEX: {i}
      </b>
    </div>
  ));

  const tambahArray = () => {
    const kotakTambahan = {
      id: arrayKotak.length + 1,
      warnaKotak: getRandomColor(),
      kata: "Hallo Baduy",
    };
    //...arrayKotak
    //{ id: 1, warnaKotak: "red", kata: "Hello World" },
    //{ id: 2, warnaKotak: "blue", kata: "Hello Jogja" },
    //{ id: 3, warnaKotak: "yellow", kata: "Hello Semarang" },
    //{ id: 4, warnaKotak: "purple", kata: "Hello Jakarta" },
    setArrayKotak((arrayKotak) => [...arrayKotak, kotakTambahan]);
    //const kotakTambahan = {id: 5, warnaKotak: "orange", kata: "Hallo Baduy"
  };

  const editArray = (i, dataID) => {
    const ubahWarna = {
      id: dataID,
      warnaKotak: getRandomColor(),
      kata: "Hallo Bandung",
    };
    //{ id: 1, warnaKotak: "red", kata: "Hello World" },
    //{ id: 2, warnaKotak: "blue", kata: "Hello Jogja" },
    //{ id: 3, warnaKotak: "yellow", kata: "Hello Semarang" },
    //{ id: 4, warnaKotak: "purple", kata: "Hello Jakarta" },
    const newArr = [...arrayKotak];
    newArr[i] = ubahWarna;
    setArrayKotak(newArr);
  };

  const deleteArray = (id) => {
    setArrayKotak(arrayKotak.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="gridTemplate">
        <div
          onClick={() => {
            if (hitungKlik == 10) {
              setKondisi("kurang");
              setHitungKlik(hitungKlik - 1);
            } else if (hitungKlik == 0) {
              setKondisi("tambah");
            } else {
            }

            if (kondisi == "tambah") {
              setHitungKlik(hitungKlik + 1);
            } else {
              setHitungKlik(hitungKlik - 1);
            }

            if (hitungKlik == 5) {
              setWarnaKotak("green");
            } else if (hitungKlik == 10 || hitungKlik == 0) {
              setWarnaKotak("red");
            } else {
            }
            tambahArray();
          }}
          className="gridFull"
        >
          <b>INI BOLD {hitungKlik}</b>
        </div>
        {listKotak}
      </div>
    </div>
  );
}
