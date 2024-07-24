import '../css/Form.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SignInForm = () => {
    return (
        <>
            <div className='sign-in-container'>
                <div className='sign-up-box'>
                    <p>Welcome to DavarL</p>
                    <div className='sign-up-content'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='sign-input-box' />
                        <TextField id="outlined-basic" label="Password" variant="outlined" className='sign-input-box' />
                        <Button variant="contained" style={{ height: '6vh', width: '22vw', fontFamily: 'Poppins', fontSize: '1vw' }}>
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignInForm;