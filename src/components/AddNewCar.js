import { useState } from 'react';
import axios from 'axios';

function AddNewCar() {
  // data value
const [Nama, setNama] = useState ("")
const [Category, setCategory] = useState("")
const [Price, setPrice] = useState("")
const [File, setFile] = useState(null)
const [FilePrev, setFilePrev] = useState(null)


const onChangePicture = e => {

   

  // mengecek adakah file apa tidak 
  if (e.target.files[0]) {
    // set file yang sudah ada kesalam use State
    setFile(e.target.files[0]);
    //  inisiai untuk merender data file yang sudah di upload
    const reader = new FileReader();
    // melakukan proses render dan di simpan dalam value
    reader.addEventListener("load", () => {
      setFilePrev(reader.result);
    });
    // melakuan render berdasrakan image yang di pilih
    reader.readAsDataURL(e.target.files[0]);
  }
};


// fungsi menggiram gambar
const postToApi =()=>{
var FormData = require('form-data');
var data = new FormData();
data.append('name', Nama);
data.append('category', Category);
data.append('price', Price);
data.append('status', 'true');
data.append('image', File);

var config = {
  method: 'post',
  url: 'https://rent-car-appx.herokuapp.com/admin/car/',
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
  console.log(response)
})
.catch(function (error) {
  console.log(error);
});

 


}



  return (
    <div className="App">
      <h1>input file </h1>
      <input label ="Nama" value={Nama} onChange={(e) => setNama (e.target.value)}/> <br/> <br/>
      <input label ="Category" value={Category} onChange={(e) => setCategory (e.target.value)}/> <br/> <br/>
      <input label ="Price" value={Price} onChange={(e) => setPrice (e.target.value)}/> <br/> <br/>
      <input onChange={(e)=>{onChangePicture(e)}} type="file"/>
      <img width={50} height={50} src={FilePrev}/> <br/> <br/>
      <button onClick={()=>{postToApi()}}>Upload</button>
    </div>



  );
}

export default AddNewCar;