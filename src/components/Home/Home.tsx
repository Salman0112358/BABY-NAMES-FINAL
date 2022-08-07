import React from 'react'
/*Importing React Components*/
import Header from '../Header/Header'
import  Grid from '../Grid/Grid'
import NameButton from '../NameButton/NameButton'

import NameData from '../../names.json'

const fullNameArray = NameData;



const Home = () : JSX.Element => {

    return (
        <>
        <Header></Header>
        <Grid header={"Baby Name Picker"}>
        {fullNameArray.map((item) => (
            <NameButton key={item.id}
            name={item.name}
            sex={item.sex}/>
        ))}
        </Grid>
        </>
        
    )

}

export default Home