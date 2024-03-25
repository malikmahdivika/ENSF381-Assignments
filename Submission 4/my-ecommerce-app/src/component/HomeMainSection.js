import React from 'react';
import reviews from '../data/reviews.js';

const styles = {}

function HomeMainSection() {
    return (
        <div styles={styles.HomeMainSection}>
            <h2>About Us</h2>
            <p>Welcome to our online store! We are passionate about providing high-quality
            products and exceptional customer service. Learn more about our story and commitment to
            your satisfaction.</p>
            <button onClick="#">Shop Now</button>
            {/* fix this link when product page is made */}
            <h2>Customer Reviews</h2>
            <div>
                {reviews.map((review, index) => {
                    return (
                        <div key={index}>
                            <h3>{review.productName}</h3>
                            <p>{review.customerName}</p>
                            <p>{review.reviewContent}</p>
                            <p>
                                Rating: 
                                {Array.from({ length: review.stars }).map((_, index) => (
                                    <span key={index}>⭐</span>
                                ))}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeMainSection;