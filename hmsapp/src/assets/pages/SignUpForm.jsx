import '../css/Form.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SignUpForm = () => {
    return (
        <>
            <div className='sign-up-container'>
                <div className='sign-up-box'>
                    <div className='sign-up-content'>
                        <TextField id="outlined-basic" label="Username" variant="outlined" className='sign-input-box' />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='sign-input-box' />
                        <TextField id="outlined-basic" label="Address" variant="outlined" className='sign-input-box' />
                        <TextField id="outlined-basic" label="Password" variant="outlined" className='sign-input-box' />
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className='sign-input-box' />
                        <Button variant="contained" style={{ height: '6vh', width: '22vw', fontFamily: 'Poppins', fontSize: '1vw' }}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUpForm;