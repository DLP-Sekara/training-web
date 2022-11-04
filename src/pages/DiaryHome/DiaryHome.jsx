import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import './DiaryHome.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DiaryCard from '../../components/DiaryCard/DiaryCard'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Button from '../../components/Buttons/Button'
import TextField from '../../components/TextField/TextField'

const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //...theme.typography.body2,
    //padding: theme.spacing(1),
    //textAlign: 'center',
    //color: theme.palette.text.secondary,
    maxWidth:345
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    //maxWidth:'100%',
    //height:'9rem',
    backgroundColor:'#09aee8'
  }));
  
const DiaryHome = () => {

  // collaps functions
  const[style,setStyle]=useState('9rem');
  const[btnVisibility,setbtnVisibility]=useState('none');
  function expandField(){
    console.log("hello")
    var status='collaps'
    if(status=='collaps'){
      setStyle('21rem')
      setbtnVisibility('block')
      status='expand';
    }
    
  }


  //btn function
  function submitNewCard(){
    setStyle('9rem')
    setbtnVisibility('none')
  }

  return (
    <>
    {/* header bar */}
      <Grid className='mainGrid' item l={12}>
          <Item><HeaderBar className='navBar'/></Item>
        </Grid>


        {/* main grid */}
    <div className='DiaryHome' >
         <Grid style={{margin: '2rem',position:'relative'}} container spacing={1}>

            {/* text input area */}
         <Grid className='textInputArea' xs={12}>
          <Item2 className='content'   style={{width:'100%',height:style}}>

            <h1 style={{display:'flex',color:'white'}}>Home</h1>

            <TextField
            style={{
              display:'flex',
              width: '98%',
              height:'5rem',
              borderRadius:'10px',
              backgroundColor:'#09aee8',
              border:'1px solid transparent',
              color:'black',
              fontSize:'18px'}}
              onClick={(e)=>{expandField()}}
            className="textField" 
            placeHolder="Your Nickname" 
            // value={userName}
            // onChange={e=>{setUserName(e.target.value)}}
            />
  
        <Button variant="contained"
         style1={{display:"inline-block", top: '9rem',position: 'absolute',left: '80rem',display:btnVisibility}} 
         style2={{border:' 1px solid transparent',borderRadius: '25px',top:'-2rem',height:'2rem'}}
        className="randomBtn" placeHolder='RANDOM' onClick={()=>{submitNewCard()}}/>

            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter Description" 
            style={{ width: '98%',
            height:'10rem',
            borderRadius:'10px',
            backgroundColor:'rgb(80 198 239)',
            border:'1px solid transparent',
            color:'black',
            fontSize:'18px' }} />
            </Item2>
         </Grid>


          {/*cards*/}
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>

        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>

        


        
      </Grid>
    </div>
    </>
  )
}

export default DiaryHome