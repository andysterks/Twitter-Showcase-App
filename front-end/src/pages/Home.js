import React from 'react'
import { Toast } from 'react-bootstrap'
// import stickManFishing from '../images/stickman-fishing.jpg'
import fishingTweets from '../images/fishing-tweet.jpg'

const Home = () => {
    return (
        <div className='bg-dark'>
            <div className="container">
                <Toast className='mx-auto'>
                    <Toast.Header>
                        <img src={fishingTweets} className="stick rounded mr-2" alt="" />
                        <strong className="mr-auto">Fishing Tweets!</strong>
                    </Toast.Header>
                    <Toast.Body>
                        * This application uses Twitter API to search desired user's tweets
                    </Toast.Body>
                    <Toast.Body>
                        * Click on Search, to search for your favorite person's tweets
                    </Toast.Body>
                    <Toast.Body>
                        * Don't know what to look? Click on Random to see selected Twitter's users tweets!
                    </Toast.Body>
                    <Toast.Body>
                        * Have Fun!
                    </Toast.Body>
                </Toast>
            </div>
        </div>
    )
}

export default Home