import type { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 249.99,
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers and audiophiles.",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1649767/pexels-photo-1649767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Electronics",
    rating: 4,
    specifications: {
      "Battery Life": "30 hours",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
      Warranty: "2 years",
    },
    reviews: [
      {
        id: 1,
        userName: "John Doe",
        rating: 5,
        comment:
          "Amazing sound quality and comfortable to wear for long periods. The noise cancellation is top-notch!",
        date: "2024-01-15",
        helpful: 12,
      },
      {
        id: 2,
        userName: "Sarah Smith",
        rating: 4,
        comment:
          "Great headphones, but could be a bit more affordable. Sound quality is excellent though.",
        date: "2024-01-10",
        helpful: 8,
      },
      {
        id: 3,
        userName: "Alex Johnson",
        rating: 5,
        comment:
          "Best headphones I've ever owned. Battery life is incredible and they're super comfortable.",
        date: "2024-01-08",
        helpful: 15,
      },
    ],
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    description:
      "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, sleep tracking, and more.",
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1000384/pexels-photo-1000384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Electronics",
    rating: 4,
    specifications: {
      Display: "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "5ATM",
      Sensors: "Heart rate, GPS, Accelerometer",
    },
    reviews: [
      {
        id: 1,
        userName: "Mike Johnson",
        rating: 4,
        comment:
          "Great for tracking workouts and daily activities. The sleep tracking is very accurate.",
        date: "2024-01-12",
        helpful: 15,
      },
      {
        id: 2,
        userName: "Rachel Green",
        rating: 5,
        comment:
          "Love this watch! The battery life is amazing and it's very comfortable to wear all day.",
        date: "2024-01-09",
        helpful: 22,
      },
    ],
  },
  {
    id: 3,
    name: "Lightweight Portable Speaker",
    price: 89.99,
    description:
      "Take your music anywhere with this compact yet powerful Bluetooth speaker.",
    images: [
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1682685/pexels-photo-1682685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1064068/pexels-photo-1064068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Electronics",
    rating: 5,
    specifications: {
      "Battery Life": "12 hours",
      Connectivity: "Bluetooth 5.0",
      Weight: "500g",
      "Water Resistance": "IPX7",
    },
    reviews: [
      {
        id: 1,
        userName: "Emily Davis",
        rating: 5,
        comment:
          "Perfect sound quality for its size. Love the portability! Great for beach trips.",
        date: "2024-01-08",
        helpful: 20,
      },
      {
        id: 2,
        userName: "Kevin Brown",
        rating: 5,
        comment:
          "Impressive bass for such a small speaker. Battery life is exactly as advertised.",
        date: "2024-01-04",
        helpful: 16,
      },
    ],
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 299.99,
    description:
      "Designed for comfort during long work days. Adjustable height and lumbar support.",
    images: [
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6954194/pexels-photo-6954194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Furniture",
    rating: 4,
    specifications: {
      Material: "Mesh and fabric",
      "Weight Capacity": "150kg",
      Adjustability: "Height, armrests, lumbar",
      Warranty: "5 years",
    },
    reviews: [
      {
        id: 1,
        userName: "David Wilson",
        rating: 4,
        comment:
          "Very comfortable for long work sessions. Good value for money. Assembly was straightforward.",
        date: "2024-01-05",
        helpful: 18,
      },
      {
        id: 2,
        userName: "Linda Chen",
        rating: 5,
        comment:
          "Best office chair I've had! My back pain is completely gone after switching to this chair.",
        date: "2024-01-02",
        helpful: 24,
      },
    ],
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description:
      "Keep your drinks cold for 24 hours or hot for 12. Eco-friendly and durable.",
    images: [
      "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Kitchen",
    rating: 5,
    specifications: {
      Capacity: "750ml",
      Material: "Stainless Steel",
      Insulation: "Double-wall vacuum",
      Dimensions: "26cm x 7cm",
    },
    reviews: [
      {
        id: 1,
        userName: "Lisa Brown",
        rating: 5,
        comment:
          "Keeps drinks cold all day. Perfect for the gym! No condensation on the outside either.",
        date: "2024-01-03",
        helpful: 25,
      },
      {
        id: 2,
        userName: "Mark Thompson",
        rating: 5,
        comment:
          "Amazing insulation! My coffee stayed hot for over 10 hours. Great quality construction.",
        date: "2023-12-30",
        helpful: 21,
      },
    ],
  },
  {
    id: 6,
    name: "Leather Messenger Bag",
    price: 159.99,
    description:
      "Handcrafted genuine leather bag with multiple compartments. Perfect for work or casual use.",
    images: [
      "https://images.pexels.com/photos/1148962/pexels-photo-1148962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Accessories",
    rating: 4,
    specifications: {
      Material: "Genuine leather",
      Dimensions: "38cm x 28cm x 10cm",
      Compartments: "3 main, 2 side pockets",
      Strap: "Adjustable shoulder strap",
    },
    reviews: [
      {
        id: 1,
        userName: "Robert Taylor",
        rating: 4,
        comment:
          "Beautiful craftsmanship and very practical for daily use. The leather quality is excellent.",
        date: "2024-01-01",
        helpful: 14,
      },
      {
        id: 2,
        userName: "Patricia Johnson",
        rating: 5,
        comment:
          "Love this bag! Perfect size for work - fits my laptop, documents, and personal items easily.",
        date: "2023-12-29",
        helpful: 19,
      },
    ],
  },
  {
    id: 7,
    name: "4K Webcam",
    price: 129.99,
    description:
      "Professional quality 4K webcam with auto-focus and noise-canceling microphone. Perfect for streaming and video calls.",
    images: [
      "https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4439463/pexels-photo-4439463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Electronics",
    rating: 5,
    specifications: {
      Resolution: "4K Ultra HD",
      "Frame Rate": "30fps",
      "Field of View": "90 degrees",
      Microphone: "Dual stereo with noise cancellation",
    },
    reviews: [
      {
        id: 1,
        userName: "Jake Miller",
        rating: 5,
        comment:
          "Crystal clear video quality! Perfect for my streaming setup. The auto-focus works flawlessly.",
        date: "2024-01-14",
        helpful: 28,
      },
      {
        id: 2,
        userName: "Emma Stone",
        rating: 5,
        comment:
          "Great for video conferences. The noise cancellation on the mic is impressive.",
        date: "2024-01-11",
        helpful: 21,
      },
    ],
  },
  {
    id: 8,
    name: "Gaming Mechanical Keyboard",
    price: 179.99,
    description:
      "RGB backlit mechanical keyboard with blue switches. Built for gaming with anti-ghosting and programmable keys.",
    images: [
      "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Electronics",
    rating: 4,
    specifications: {
      "Switch Type": "Mechanical Blue",
      Backlight: "RGB with 16.7M colors",
      Connectivity: "USB-C",
      "Key Layout": "Full size with numpad",
    },
    reviews: [
      {
        id: 1,
        userName: "Tyler Chen",
        rating: 5,
        comment:
          "Amazing tactile feedback and the RGB lighting is stunning. Perfect for gaming sessions.",
        date: "2024-01-13",
        helpful: 32,
      },
      {
        id: 2,
        userName: "Ashley Wong",
        rating: 4,
        comment:
          "Great keyboard but quite loud. The build quality is excellent though.",
        date: "2024-01-09",
        helpful: 18,
      },
    ],
  },
  {
    id: 9,
    name: "Wireless Charging Pad",
    price: 39.99,
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
    images: [
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4164815/pexels-photo-4164815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8739505/pexels-photo-8739505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8739492/pexels-photo-8739492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Electronics",
    rating: 4,
    specifications: {
      "Charging Speed": "15W fast charging",
      Compatibility: "Qi-enabled devices",
      Design: "Ultra-slim with LED indicator",
      "Safety Features": "Over-current, over-voltage protection",
    },
    reviews: [
      {
        id: 1,
        userName: "Marcus Johnson",
        rating: 4,
        comment:
          "Works perfectly with my phone. The LED indicator is helpful to know when it's charging.",
        date: "2024-01-12",
        helpful: 16,
      },
      {
        id: 2,
        userName: "Sophie Martinez",
        rating: 5,
        comment:
          "Love the sleek design! Charges my phone quickly and fits perfectly on my nightstand.",
        date: "2024-01-07",
        helpful: 23,
      },
    ],
  },
  {
    id: 10,
    name: "Standing Desk Converter",
    price: 199.99,
    description:
      "Adjustable standing desk converter that transforms any desk into a sit-stand workstation. Easy height adjustment.",
    images: [
      "https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4050298/pexels-photo-4050298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Furniture",
    rating: 4,
    specifications: {
      "Height Range": "15-50cm adjustment",
      "Weight Capacity": "20kg",
      Dimensions: "80cm x 60cm platform",
      Assembly: "No tools required",
    },
    reviews: [
      {
        id: 1,
        userName: "Jennifer Kim",
        rating: 4,
        comment:
          "Great for switching between sitting and standing. Easy to adjust and very stable.",
        date: "2024-01-10",
        helpful: 19,
      },
      {
        id: 2,
        userName: "Ryan Walsh",
        rating: 5,
        comment:
          "Perfect solution for my home office. My back feels much better since I started using this.",
        date: "2024-01-06",
        helpful: 26,
      },
    ],
  },
  {
    id: 11,
    name: "Smart Home Security Camera",
    price: 149.99,
    description:
      "1080p HD security camera with night vision, motion detection, and smartphone app control.",
    images: [
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6436318/pexels-photo-6436318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Electronics",
    rating: 5,
    specifications: {
      Resolution: "1080p Full HD",
      "Night Vision": "Up to 30 feet",
      Storage: "Cloud and local SD card",
      Connectivity: "Wi-Fi 2.4GHz/5GHz",
    },
    reviews: [
      {
        id: 1,
        userName: "Carlos Rodriguez",
        rating: 5,
        comment:
          "Excellent camera! Clear video quality and the app is very user-friendly. Night vision works great.",
        date: "2024-01-09",
        helpful: 31,
      },
      {
        id: 2,
        userName: "Amanda Foster",
        rating: 4,
        comment:
          "Good security camera with reliable motion detection. Setup was easier than expected.",
        date: "2024-01-05",
        helpful: 17,
      },
    ],
  },
  {
    id: 12,
    name: "Premium Coffee Maker",
    price: 299.99,
    description:
      "Programmable drip coffee maker with thermal carafe. Brews perfect coffee every time with temperature control.",
    images: [
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4397835/pexels-photo-4397835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Kitchen",
    rating: 5,
    specifications: {
      Capacity: "12 cups",
      "Brew Temperature": "195-205°F optimal",
      Carafe: "Thermal stainless steel",
      Features: "Programmable, auto shut-off",
    },
    reviews: [
      {
        id: 1,
        userName: "Coffee Lover Jane",
        rating: 5,
        comment:
          "Best coffee maker I've ever owned! The thermal carafe keeps coffee hot for hours without burning it.",
        date: "2024-01-08",
        helpful: 29,
      },
      {
        id: 2,
        userName: "Michael Barnes",
        rating: 5,
        comment:
          "Consistently brews excellent coffee. The programmable feature is perfect for busy mornings.",
        date: "2024-01-04",
        helpful: 22,
      },
    ],
  },
  {
    id: 13,
    name: "Yoga Mat Premium",
    price: 69.99,
    description:
      "Non-slip yoga mat made from eco-friendly materials. Perfect grip and cushioning for all yoga practices.",
    images: [
      "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4426405/pexels-photo-4426405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    ],
    category: "Sports",
    rating: 5,
    specifications: {
      Thickness: "6mm premium cushioning",
      Material: "Eco-friendly TPE",
      Dimensions: "183cm x 61cm",
      Features: "Non-slip, lightweight, carrying strap",
    },
    reviews: [
      {
        id: 1,
        userName: "Yoga Instructor Lisa",
        rating: 5,
        comment:
          "Perfect mat for daily practice! Great grip even during hot yoga sessions. Eco-friendly bonus!",
        date: "2024-01-07",
        helpful: 34,
      },
      {
        id: 2,
        userName: "Fitness Enthusiast Tom",
        rating: 4,
        comment:
          "Excellent quality and very comfortable. The carrying strap makes it easy to transport.",
        date: "2024-01-03",
        helpful: 20,
      },
    ],
  },
  {
    id: 14,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    description:
      "High-precision wireless gaming mouse with RGB lighting and programmable buttons. Ultra-low latency.",
    images: [
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    videos: [
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    ],
    category: "Electronics",
    rating: 4,
    specifications: {
      DPI: "Up to 16,000",
      "Battery Life": "70 hours",
      Buttons: "6 programmable",
      Connectivity: "2.4GHz wireless + USB-C",
    },
    reviews: [
      {
        id: 1,
        userName: "Pro Gamer Alex",
        rating: 5,
        comment:
          "Incredible precision and no lag whatsoever. The RGB effects are customizable and look amazing.",
        date: "2024-01-06",
        helpful: 27,
      },
      {
        id: 2,
        userName: "Sarah Gaming",
        rating: 4,
        comment:
          "Great mouse for the price. Battery life is excellent and it's very comfortable for long sessions.",
        date: "2024-01-02",
        helpful: 19,
      },
    ],
  },
];
