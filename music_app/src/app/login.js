import './stylesheets/login.css';

const Login=()=>{
    return (
        <div className='login-container'>
            <div className='innerContainer'>
                {/*<h1>Login Here</h1>*/}
                <div className={'login-text-container'}>
                    <h1 className={'text'}>Hi, there</h1>
                    <p>Put else yah so </p>
                    <p>Dont hv an account <span><a href={'signin'}>Sign up here</a></span></p>
                </div>
                <form className={'loginForm-container'}>
                    <label className={'loginForm'}>Email</label>
                    <input type={'text'} name='email'/>
                    <label>Password</label>
                    <input type={'password'} name={'password'}/>
                    <a href={'resetPassword'}>Forgot Password</a>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
};

export default Login;