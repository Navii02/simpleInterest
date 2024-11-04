import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  
  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
          <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
            <h1>Simple Interest App</h1>
            <p>Calculate your simple interest Easily</p>

            <div className='bg-warning p-3 d-flex justify-content-center align-items-center mt-3 rounded-2 flex-column' style=           {{height:'150px'}}>
              <h1>₹ 100</h1>
              <p>Total simple interest</p>
            </div>

            <div>
              <div className="my-3">
                <TextField id="outlined-basic" className='w-100' label="₹ Principal amount" variant="outlined" />
              </div>
              <div className="my-3">
                <TextField id="outlined-basic" className='w-100'  label="Rate of Interest (%)" variant="outlined" />
              </div>
              <div className="my-3">
                <TextField id="outlined-basic" className='w-100'  label="Year (Yr)" variant="outlined" />
              </div>
              <div className='mb-3 d-flex justify-content-between'>
              <Button variant="contained" className='p-4' style={{width:'190px'}}color='success'>Calculate</Button>
              <Button variant="outlined" className='p-4' style={{width:'190px'}}>Reset</Button>
              </div>
              
            </div>

          </div>
      </div> 
    </>
  )
}

export default App
