// Product Data for EcoClean
const products = [
    {
        id: 1,
        name: "All-Purpose Cleaner",
        description: "Tough on dirt, gentle on surfaces. Works on countertops, appliances, and more.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "all-purpose",
        badge: "Bestseller",
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "Bathroom Cleaner Spray",
        description: "Removes soap scum and hard water stains without harsh fumes.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "bathroom",
        badge: "New",
        rating: 4.7,
        reviews: 89
    },
    {
        id: 3,
        name: "Kitchen Degreaser",
        description: "Cuts through grease and grime on stovetops, hoods, and backsplashes.",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "kitchen",
        badge: "Popular",
        rating: 4.9,
        reviews: 156
    },
    {
        id: 4,
        name: "Laundry Detergent",
        description: "Concentrated formula for 64 loads. Safe for sensitive skin and HE machines.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "laundry",
        badge: "Eco Choice",
        rating: 4.8,
        reviews: 203
    },
    {
        id: 5,
        name: "Glass & Window Cleaner",
        description: "Streak-free shine for windows, mirrors, and glass surfaces.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "all-purpose",
        badge: "",
        rating: 4.6,
        reviews: 78
    },
    {
        id: 6,
        name: "Floor Cleaner Concentrate",
        description: "Safe for hardwood, tile, and laminate. One capful cleans entire home.",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "all-purpose",
        badge: "",
        rating: 4.7,
        reviews: 92
    },
    {
        id: 7,
        name: "Toilet Bowl Cleaner",
        description: "Removes stains and disinfects without chlorine or harsh acids.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "bathroom",
        badge: "",
        rating: 4.5,
        reviews: 67
    },
    {
        id: 8,
        name: "Dish Soap Liquid",
        description: "Plant-based formula cuts grease. Gentle on hands, tough on dishes.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        category: "kitchen",
        badge: "",
        rating: 4.8,
        reviews: 145
    }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('ecoclean_cart')) || [];

function saveCart() {
    localStorage.setItem('ecoclean_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}