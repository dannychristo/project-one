import React, {useState, useMemo, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import database from './firebase';

const db = [
    {
      name: 'Richard Hendricks',
      url: 'https://d1qxviojg2h5lt.cloudfront.net/images/01DVE8XQTBZY43FEMZQ3Q97XGT/middleditch.valley570.webp'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://www.nationalreview.com/wp-content/uploads/2017/05/silicon-valleys-erlich-bachman-capitalist-hero.jpg?fit=920%2C537'
    },
    {
      name: 'Monica Hall',
      url: 'https://i.ytimg.com/vi/_CDMAoRHr98/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBorXdNVwDNTQxjfcPDnKQTp3GQTw'
    },
    {
      name: 'Jared Dunn',
      url: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=http://www.washingtonpost.com/news/act-four/wp-content/uploads/sites/25/2018/04/Jared-Silicon-Valley.jpg&w=1440'
    }
  ]

{/*
const snapshot = await db.get();
snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
});
*/}

//const db = database;

function TinderCards2 () {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1);
    const [people, setPeople] = useState([]);
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)

    {/*useEffect(() => {
        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            unsubscribe(); //cleanup
        }
    }, []);*/}

    const childRefs = useMemo(
        () =>
        Array(db.length).fill(0).map((i) => React.createRef()), []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }
    
    const canGoBack = currentIndex < db.length - 1;
    
    const canSwipe = currentIndex >= 0;
    
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }
    
    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
    
    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir)
        }
    }
    
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }
    
    return (
        <div>
            <link
                href='https://fonts.googleapis.com/css?family=Damion&display=swap'
                rel='stylesheet'
            />
            <link
                href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
                rel='stylesheet'
            />
            <div className='tinderCards__cardContainer'>
                {db.map((person,index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={person.name}
                        onSwipe={(dir) => swiped(dir, person.name, index)}
                        onCardLeftScreen = {() => outOfFrame(person.name, index)}
                        >
                            <Link to='/map'>
                                <div
                                    style={{backgroundImage: `url(${person.url})`}}
                                    className='card'
                                >
                                    <h3>{person.name}</h3>
                                </div>
                            </Link>
                        </TinderCard>
                ))}
            </div>
            <div className='buttons'>
                <IconButton className="swipeButtons__left" onClick={() => swipe('left')}>
                    <CloseIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__repeat" onClick={() => goBack()}>
                    <ReplayIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__right" onClick={() => swipe('right')}>
                    <FavoriteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default TinderCards2