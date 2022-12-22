import React, { useState } from 'react';

const CreateItem = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [missingFields, setMissingFields] = useState(false);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState('');


    const changeSetMovie = (e) =>{
        setMissingFields(false)
        
        setMovie(e.target.value)
    }

    const onAddMovie = ()=>{
        setMovies(prev => [...prev, movie])
        setMovie('')
    }

    const changeSetCity = (e) =>{
        setMissingFields(false)

        setCity(e.target.value)
    }
    const changeSetFirstName = (e) =>{
        setMissingFields(false)

        setFirstName(e.target.value)
    }
    const changeSetEmployer = (e) =>{
        setMissingFields(false)

        setEmployer(e.target.value)
    }
    const changeSetCountry = (e) =>{
        setMissingFields(false)

        setCountry(e.target.value)
    }
    const changeSetLastName = (e) =>{
        setMissingFields(false)

        setLastName(e.target.value)
    }
    const changeSetTitle = (e) =>{
        setMissingFields(false)

        setTitle(e.target.value)
    }

    const resetFields=()=>{
        setFirstName('')
        setLastName('')
        setCity('')
        setCountry('')
        setEmployer('')
        setTitle('')
        setMissingFields(false)
        setMovie('')
    }

    const emptyFields = ()=>{
        return !!country && !!employer && !!city && !!firstName && !!lastName && !!title;
    }

    const addItemToData=()=>{
        if(!!movie) {
            setMovies(prev => [...prev, movie])
        }
        if (!emptyFields()) {
            setMissingFields(true)
            return;
        };
        props.updateList({
            id: props.data.length,
            name: { first: firstName, last: lastName },
            city: city,
            country: country,
            employer: employer,
            title: title,
            favoriteMovies: movies,
        })
        resetFields();
        props.createItemVisible();
    }

    return (
        <div style={{padding: '20px', backgroundColor: '#fff'}}>
            <label>
        First Name:
        <input
          type="text"
          onChange={e=>changeSetFirstName(e)}
          value={firstName}
          ></input>
      </label>
      <label>
        Last Name:
        <input
          type="text"
          onChange={e=>changeSetLastName(e)}
          value={lastName}
          ></input>
      </label>
      <label>
        City:
        <input
          type="text"
          onChange={e=>changeSetCity(e)}
          value={city}
          ></input>
      </label>
      <label>
        Country:
        <input
          type="text"
          onChange={e=>changeSetCountry(e)}
          value={country}
          ></input>
      </label>
      <label>
        Employer:
        <input
          type="text"
          onChange={e=>changeSetEmployer(e)}
          value={employer}
          ></input>
          </label>
      <label>
        Title:
        <input
          type="text"
          onChange={e=>changeSetTitle(e)}
          value={title}
          ></input>
          </label>
          <label>
        Add Favorite Movie:
        <input
          type="text"
          onChange={e=>changeSetMovie(e)}
          value={movie}
          ></input><button onClick={onAddMovie}>Add Movie</button>
          </label>
          {!!movies && movies.map(item => <li>{item}</li>)}
          {!!missingFields && <p>Please fill in all of the fields</p> }
          <button onClick={addItemToData}>Add Person</button>
        </div>
    )
}

export default CreateItem;