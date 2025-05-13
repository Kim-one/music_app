import './stylesheets/home.css';

const Home=()=>{
    return(
        <>
            <div className={'homepage-container'}>
                {/*<h1>Home Page</h1>*/}
                <div className={'container'}>
                    <h1 className={'home-text'}>What are you in the mood for?</h1>
                    <input className={'search-bar'} type={'text'}/>
                    <button type={'submit'} className={'setMood'}>Mood</button>
                </div>
            </div>
        </>
    );
};

export default Home;