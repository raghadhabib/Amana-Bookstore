// src/app/page.tsx
'use client';

import { useState } from 'react';
import BookGrid from './components/BookGrid';
import { books } from './data/books';
import Footer from './components/footer';


export default function HomePage() {
  // Simple cart handler for demo purposes
  const handleAddToCart = (bookId: string) => {
    console.log(`Added book ${bookId} to cart`);
    // Here you would typically dispatch to a cart state or call an API
  };

  return (
    <div className="container mx-auto px-4 pt-8">
      {/* Welcome Section */}
      <section className="text-center bg-blue-200 p-12 rounded-lg mb-12 shadow-md hover:bg-yellow-100 transition duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 hover:text-gray-500 transition-colors duration-300">Welcome to the Amana Bookstore!</h1>
        <p className="text-xlg text-gray-600">
          Your one-stop shop for the best books. Discover new worlds and adventures.
        </p>
      </section>


      {/* Book Grid */}
      <BookGrid books={books} onAddToCart={handleAddToCart} />
            {/* Footer */}
      <Footer />
    </div>
  );
}
