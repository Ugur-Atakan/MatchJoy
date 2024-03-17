
import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, Button, StyleSheet } from 'react-native'
import TinderCard from 'react-tinder-card'
import { Character } from 'src/types'

const MatchCard = ({ character }: { character: Character }) => {
  return (
    <TinderCard ref={childRefs[index]} key={character.id} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
      <View style={cardStyle.card}>
        <ImageBackground style={cardStyle.cardImage} source={{ uri: character.profile_image }}>
          <Text style={cardStyle.cardTitle}>{character.fullName}</Text>
        </ImageBackground>
      </View>
    </TinderCard>
  )
}
export default MatchCard;

const cardStyle = StyleSheet.create({
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
})