import React from 'react'

const Pricing = () => {
    const plans = [
        {
            name: "Beginner Plan",
            monthly: 500,
            yearly: 5000,
            description: "Best for beginners to start their fitness journey.",
            features: [
                { text: "Access to basic equipment", available: true },
                { text: "One personal training session", available: true },
                { text: "Dietary consultation", available: false },
                { text: "Access to premium classes", available: false },
            ],
        },
        {
            name: "Premium Plan",
            monthly: 800,
            yearly: 8500,
            description: "Perfect for advanced users with extra perks.",
            features: [
                { text: "Access to all equipment", available: true },
                { text: "Weekly personal training", available: true },
                { text: "Dietary consultation", available: false },
                { text: "Access to premium classes", available: true },
            ],
        },
        {
            name: "Pro Plan",
            monthly: 1000,
            yearly: 10800,
            description: "Ideal for professionals aiming for peak performance.",
            features: [
                { text: "Unlimited gym access", available: true },
                { text: "Daily personal training", available: true },
                { text: "Advanced dietary consultation", available: true },
                { text: "Exclusive premium classes", available: true },
            ],
        },
    ];

    return (
        <div>

        </div>
    )
}

export default Pricing