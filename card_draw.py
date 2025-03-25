# Python program to draw 5 random cards from a shuffled deck

# importing modules
import itertools
import random

# make a deck of cards
deck = list(itertools.product(range(1, 14), ['Spade', 'Heart', 'Diamond', 'Club']))

# shuffle the cards
random.shuffle(deck)

# draw five cards
print("You got:")
for i in range(5):
    rank = deck[i][0]
    suit = deck[i][1]
    rank_name = {1: "Ace", 11: "Jack", 12: "Queen", 13: "King"}.get(rank, rank)
    print(f"{rank_name} of {suit}")
