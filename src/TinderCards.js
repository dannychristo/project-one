import React, {useEffect, useState, useRef, useMemo} from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function TinderCards() {
    const [people, setPeople] = useState([]);
    {/*const [lastDirection, setLastDirection] = useState()

    const currentIndexRef = useRef(people)

    const childRefs = useMemo(
        () =>
            Array(database.length).fill(0).map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setPeople(val)
        currentIndexRef.current = val
    }

    const canSwipe = people >= 0;

    const swiped  = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
        if (canSwipe && people < database.length) {
            await childRefs[people].current.swipe(dir)
        }
    }*/}

    useEffect(() => {
        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            unsubscribe(); //cleanup
        }
    }, []);
    return(
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person, index) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        >
                        {/*
                        ref={childRefs[index]}
                        onSwipe={(dir) => swiped(dir, person.name, index)}
                        onCardLeftScreen={() => outOfFrame(person.name, index)}
                        */}
                        <Link to="/map">
                            <div style={{backgroundImage: `url(${person.url})`}} 
                            className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </Link>
                    </TinderCard>
                ))}
            </div>
            <div className="buttons">
                <IconButton className="swipeButtons__right">
                    <FavoriteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
            
    );
}

export default TinderCards