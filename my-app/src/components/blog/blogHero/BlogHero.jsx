import React from "react";
import BlogCards from "./blogCards";
import BlogHeader from "./BlogHeader";
import BlogNavbar from "./BlogNavbar";
import BlogNavigationBtn from "./BlogNavigationBtn";

const posts = [
  {
    category: "Design",
    title: "10 Tips for Crafting the Perfect UX Portfolio by Ulearna",
    description:
      "Learn how to showcase your design skills and stand out in a crowded job market.",
    author: "Karima",
    date: "3 April 2023",
    avatar:
      "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
    poster:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    category: "Technology",
    title: "The Future of Mobile App Development learn in ulearna",
    description:
      "You will thought by the world best developers of mobile app development and web development ",
    author: "Obaidullah",
    date: "1 April 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    poster:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    category: "Business",
    title: "How to Launch a Successful Startup",
    description:
      "Learn the essential steps to launch a successful startup and make your dreams a reality.",
    author: "Sarah Khalili",
    date: "28 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    poster:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Health",
    title: "The Benefits of Mindfulness Meditation",
    description:
      "Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",
    author: "Abdul Majid",
    date: "25 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    poster:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Education",
    title: "Why Learning a Second Language is Important",
    description:
      "Explore the benefits of learning a second language and how it can improve your cognitive abilities.",
    author: "Zakir khan",
    date: "22 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    poster:
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Travel",
    title: "The Best Places to Visit in Europe",
    description:
      "Discover the top destinations in Europe and plan your dream vacation.",
    author: "Zabi jan",
    date: "19 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/99.jpg",
    poster:
      "https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Food",
    title: "How to Make the Perfect Cup of Coffee",
    description:
      "Learn the secrets to making the perfect cup of coffee and impress your friends and family.",
    author: "Khalil jan",
    date: "16 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    poster:
      "https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
  },
  {
    category: "Fashion",
    title: "The Latest Fashion Trends for Spring 2023",
    description:
      "Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",
    author: "Rahimi",
    date: "13 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    poster:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Sports",
    title: "The Benefits of Yoga for Athletes",
    description:
      "Learn how practicing yoga can improve your athletic performance and prevent injuries.",
    author: "Abdullah",
    date: "10 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    poster:
      "https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

function BlogHero() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2">
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <BlogHeader
            title="This Blog belongs to Ulearna"
            description="This is where we can add anything from the you and other that should be looking good about or in this blog"
            search="Search"
          />
        </div>
        <BlogNavbar />
        <BlogCards posts={posts} />
        <BlogNavigationBtn />
      </div>
    </div>
  );
}

export default BlogHero;
