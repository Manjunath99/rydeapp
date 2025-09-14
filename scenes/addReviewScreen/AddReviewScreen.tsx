// src/screens/AddReviewScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/elements/Button';

export default function AddReviewScreen() {
  const navigation = useNavigation();
  const [reviewText, setReviewText] = useState('');
  const [ratingGiven, setRatingGiven] = useState('');

  const handleSave = () => {
    const newReview = {
      userId: '123', // replace with actual userId
      reviewId: uuidv4(),
      reviewText,
      reviewerId: '456', // current logged-in user id
      reviewDate: new Date().toISOString(),
      ratingGiven: parseInt(ratingGiven),
    };

    console.log('Saving review:', newReview);

    // TODO: Save to backend (DB or API)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Review</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Review"
        value={reviewText}
        onChangeText={setReviewText}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Rating (1-5)"
        keyboardType="numeric"
        value={ratingGiven}
        onChangeText={setRatingGiven}
      />

      <Button title="Submit Review" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
});
