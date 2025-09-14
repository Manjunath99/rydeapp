import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import Button from '@/components/elements/Button';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'expo-router';

// ----------------- Types -----------------
export type UserReview = {
  userId: string;
  reviewId: string;
  reviewText: string;
  reviewerId: string;
  reviewDate: string;
  ratingGiven: number;
};

export type UserRating = {
  userId: string;
  averageRating: number;
  numberOfRatings: number;
};

// ----------------- Factories -----------------
function createUserReview({
  userId,
  reviewText,
  reviewerId,
  ratingGiven,
}: {
  userId: string;
  reviewText: string;
  reviewerId: string;
  ratingGiven: number;
}): UserReview {
  return {
    userId,
    reviewId: uuidv4(),
    reviewText,
    reviewerId,
    reviewDate: new Date().toISOString(),
    ratingGiven,
  };
}

function createUserRating(userId: string, reviews: UserReview[]): UserRating {
  const numberOfRatings = reviews.length;
  const averageRating =
    numberOfRatings === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.ratingGiven, 0) / numberOfRatings;

  return {
    userId,
    averageRating: parseFloat(averageRating.toFixed(2)),
    numberOfRatings,
  };
}

// ----------------- Screen -----------------
export default function ReviewScreen() {
  const userId = 'user-123';
  const reviewerId = 'reviewer-456';
  const router = useRouter();

  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState<number>(0);

  const userRating: UserRating = createUserRating(userId, reviews);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Reviews</Text>

      <Text style={styles.summary}>
        ⭐ {userRating.averageRating} ({userRating.numberOfRatings} ratings)
      </Text>

      <FlatList
        data={reviews}
        keyExtractor={item => item.reviewId}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <Text style={styles.reviewRating}>⭐ {item.ratingGiven}</Text>
            <Text style={styles.reviewText}>{item.reviewText}</Text>
            <Text style={styles.reviewDate}>{new Date(item.reviewDate).toLocaleDateString()}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No reviews yet. Be the first!</Text>}
      />
      <Button
        title="Submit Review"
        onPress={() => {
          router.push('/profile/reviews/AddReviewScreen');
        }}
      />
    </View>
  );
}

// ----------------- Styles -----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  summary: { fontSize: 16, marginBottom: 16 },
  subtitle: { fontSize: 18, fontWeight: '600', marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 6,
    borderRadius: 6,
  },
  reviewCard: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewRating: { fontSize: 16, fontWeight: 'bold' },
  reviewText: { fontSize: 14, marginTop: 4 },
  reviewDate: { fontSize: 12, color: '#777', marginTop: 4 },
  empty: { textAlign: 'center', marginTop: 20, color: '#888' },
});
