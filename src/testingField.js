import {TextField , Button,Box} from '@mui/material'
import React , {useState} from "react"
import NavBar from './NavBar'

const Field = ()=>{
    const [data, setData] = useState('')
    function inputData(event) {
        console.log("value", event.target.value)
        setData(event.target.value)
    }
    function sendData() {
        console.log("Dtaa received", data)
    }
    return(
        <>
            <NavBar />
            <Box
            sx = {{
                m:1,
                display:'flex',
                justifyContent:'center'
            }}>
                <TextField sx = {{flexGrow:0.4,mx:2}}onChange = {inputData}id="outlined-basic" label="Enter Data" size = "small"variant="outlined" value = {data}/>
            <TextField onChange={inputData} id="outlined-basic" label="Enter Age" size="small" variant="outlined" value={data} />
            
            <Button sx = {{mx:2}} color = "primary" onClick = {sendData}variant='contained' size = "small">Search</Button>
            </Box>
        <Box
         sx = {{
                display: 'flex',
                justifyContent: 'center',
                flexWrap:'wrap',
                flexDirection:'row',
                m:2
               
                
                
        }}>
            <Box
            sx = {{
                border:'1px solid black',
                height:'12rem',
                width:'10rem',
                borderRadius:1,
                m:1,
                        boxShadow: 10,
            }}>
                    <img
                    height = "150"
                    width="160.5"
                        src="https://img.freepik.com/free-vector/electric-ball-lightning-circle-strike-impact-place_1441-3773.jpg?w=2000"
                    />
            </Box>
            <Box
                sx={{
                    border: '1px solid black',
                    height: '12rem',
                    width: '10rem',
                    borderRadius: 1,
                    m: 1
                }}>
                <img
                    height="150"
                    width="160.5"
                    src="https://img.freepik.com/free-vector/electric-ball-lightning-circle-strike-impact-place_1441-3773.jpg?w=2000"
                />
            </Box>
            <Box
                sx={{
                    border: '1px solid black',
                    height: '12rem',
                    width: '10rem',
                    borderRadius: 1,
                    m: 1
                }}>
                <img
                    height="150"
                    width="160.5"
                    src="https://img.freepik.com/free-vector/electric-ball-lightning-circle-strike-impact-place_1441-3773.jpg?w=2000"
                />
            </Box>
            <Box
                sx={{
                    border: '1px solid black',
                    height: '12rem',
                    width: '10rem',
                    borderRadius: 1,
                    m: 1
                }}>
                <img
                    height="150"
                    width="160.5"
                    src="https://img.freepik.com/free-vector/electric-ball-lightning-circle-strike-impact-place_1441-3773.jpg?w=2000"
                />
            </Box>
            <Box
                sx={{
                    border: '1px solid black',
                    height: '12rem',
                    width: '10rem',
                    borderRadius: 1,
                    m: 1
                }}>
                <img
                    height="150"
                    width="160.5"
                    src="https://img.freepik.com/free-vector/electric-ball-lightning-circle-strike-impact-place_1441-3773.jpg?w=2000"
                />
            </Box>
            
        </Box>
        </>
        
        
        
    )
}
export default Field;