import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'

function App() {

  let [jokes, setjoke] = useState([])

  useEffect(
    () => {
      axios.get('/api/jokes')
        .then(res => setjoke(res.data))
        .catch((err) => console.log('error', err))
    }, []

  )

  let styles = {
    backgroundColor: '#f0e68c',
    color: '#352917',
    fontFamily: 'Arial',
    padding: '10px',
    margin: '10px',
    borderRadius: '4px',
    width: 'calc(100% / 3 - 20px)',
    height: '200px',
    boxSizing: 'border-box',
    display : 'flex' ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    flexGrow : 2
  }
  let stylemain = {
    backgroud: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "flex-start",
    width: '100%',
  }


  return (
    <>
      <h1>ALL JOKES!!!</h1>
      <h2>{jokes.length}</h2>

      <div style={stylemain}>
        {
          jokes.map((joke) => {
            return (
              <div style={styles} key={joke.id}>
                <h3> {joke.joke} </h3>
              </div>

            )
          })
        }
      </div>
    </>
  )

}

export default App
