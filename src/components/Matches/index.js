import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, Button, StyleSheet } from 'react-native'
import TinderCard from 'react-tinder-card'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  buttons: {
    margin: 20,
    zIndex: -100,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  }
}
);

const alreadyRemoved = []
import { userData } from 'constant';
const users = userData
let charactersState = users // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

export default function Matches() {
  const [characters, setCharacters] = useState(userData)
  const [lastDirection, setLastDirection] = useState()
  const [allSwiped, setAllSwiped] = useState(false);

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
    if (charactersState.length - alreadyRemoved.length === 0) {
      setAllSwiped(true);
    }
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(character => character.name !== name);
    setCharacters(charactersState);
    if (charactersState.length - alreadyRemoved.length === 0) {
      setAllSwiped(true);
    }
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {allSwiped ? (
          <AllSwiped />
        ) : (
          <>
            <Text style={styles.header}>React Native Tinder Card</Text>
            <View style={styles.cardContainer}>
              {characters.map((character, index) =>
                <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                  <View style={styles.card}>
                    <ImageBackground style={styles.cardImage} source={{ uri: character.img }}>
                      <Text style={styles.cardTitle}>{character.name}</Text>
                    </ImageBackground>
                  </View>
                </TinderCard>
              )}
            </View>
            <View style={styles.buttons}>
              <Button disabled={allSwiped} onPress={() => swipe('left')} title='Swipe left!' />
              <Button disabled={allSwiped} onPress={() => swipe('right')} title='Swipe right!' />
            </View>
            {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> : <Text style={styles.infoText}>Swipe a card or press a button to get started!</Text>}
          </>
        )}
      </View>
      <View style={styles.buttons}>
      </View>
    </View>
  )
}

const AllSwiped = () => {
  return (
    <View style={[styles.card, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', }]}>
      <Text style={{ fontSize: 24 }}>You have swiped all users</Text>
    </View >
  )
}