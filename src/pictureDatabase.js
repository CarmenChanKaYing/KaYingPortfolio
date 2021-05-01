const projectThumbnailCollection = [
  "images/project1/blog_homePage.JPG",
  "images/project2/shopping_cart_homePage.JPG",
  "images/project3/battleship_homePage.JPG",
  "images/project4/sorting_index.JPG",
]

const projectName = [
  "Ka Ying Programming Blog",
  "Shopping Cart Website",
  "Battleship Game Play",
  "Sorting Algorithm Learning Platform",
]

const photoData1 = [
  {
    photoPath: "images/project1/blog_homePage.JPG",
    description: "Home Page",
  },
  {
    photoPath: "images/project1/blog_blogPost.JPG",
    description: "Blog Post",
  },
  {
    photoPath: "images/project1/blog_tagPage.JPG",
    description: "Tag Page",
  },
  {
    photoPath: "images/project1/blog_categoryPage.JPG",
    description: "Category Page",
  },
  {
    photoPath: "images/project1/blog_archivePage.JPG",
    description: "Archive Page",
  },
  {
    photoPath: "images/project1/blog_searchPage.JPG",
    description: "Search Page",
  },
]

const photoData2 = [
  {
    photoPath: "images/project2/shopping_cart_homePage.JPG",
    description: "Home Page",
  },
  {
    photoPath: "images/project2/shopping_cart_productPage.JPG",
    description: "Product Page",
  },
  {
    photoPath: "images/project2/shopping_cart_productDetailPage.JPG",
    description: "Product Detail Page",
  },
  {
    photoPath: "images/project2/shopping_cart_cartPage.JPG",
    description: "Cart Page",
  },
]

const photoData3 = [
  {
    photoPath: "images/project3/battleship_homePage.JPG",
    description: "Home Page",
  },
  {
    photoPath: "images/project3/battleship_rule1.JPG",
    description: "Rule",
  },
  {
    photoPath: "images/project3/battleship_rule2.JPG",
    description: "Rule",
  },
  {
    photoPath: "images/project3/battleship_setting1.JPG",
    description: "Setting",
  },
  {
    photoPath: "images/project3/battleship_setting2.JPG",
    description: "Setting",
  },
  {
    photoPath: "images/project3/battleship_setShipStage.JPG",
    description: "Set Ship Stage",
  },
  {
    photoPath: "images/project3/battleship_playingStage.JPG",
    description: "Playing Stage",
  },
]

const photoData4 = [
  {
    photoPath: "images/project4/sorting_index.JPG",
    description: "Login Page",
  },
  {
    photoPath: "images/project4/sorting_register.JPG",
    description: "Register Page",
  },
  {
    photoPath: "images/project4/sorting_homePage.JPG",
    description: "Home Page",
  },
  {
    photoPath: "images/project4/sorting_intro1.JPG",
    description: "Algorithm Introduction",
  },
  {
    photoPath: "images/project4/sorting_intro2.JPG",
    description: "Algorithm Introduction",
  },
  {
    photoPath: "images/project4/sorting_ex1.JPG",
    description: "Exercise",
  },
  {
    photoPath: "images/project4/sorting_ex2.JPG",
    description: "Exercise",
  },
  {
    photoPath: "images/project4/sorting_profile.JPG",
    description: "Profile",
  },
  {
    photoPath: "images/project4/sorting_report.JPG",
    description: "Report (Administrator)",
  },
]

const data = [
  {
    title: projectName[0],
    photo: photoData1,
    languages: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "SQL"],
    content:
      "It is a programming blog to record the bugs I have faced before and some tutorials about programming skills.",
    demo: "https://kayingprogrammingblog.epizy.com/?i=1",
    slug: "ka-ying-programming-blog",
  },
  {
    title: projectName[1],
    photo: photoData2,
    languages: ["HTML", "SCSS", "ReactJS", "JavaScript"],
    content:
      "It is a Online Shopping Cart Simulation Website. User can simulate the process of select products and add to cart like a real online shopping cart website",
    description: "Idea from The Odin Project",
    github: "https://github.com/CarmenChanKaYing/Odin-Shopping-Cart",
    demo: "https://carmenchankaying.github.io/Odin-Shopping-Cart/#/",
    slug: "shopping-cart-website",
  },
  {
    title: projectName[2],
    photo: photoData3,
    languages: ["HTML", "CSS", "JavaScript", "jQuery"],
    content:
      "It is a website battleship game. User can set the size of the sea and the amount for each type of ships. If they don't know the rule of battleship, they can read the guideline in rule page. Before start playing, the user needs to set the ships inside their sea and then compete with computer UI. The game will continue until either all the ships inside player's sea or all the ships inside UI's sea destroyed.",
    github: "https://github.com/CarmenChanKaYing/SimpleBattleShipGame",
    demo: "https://carmenchankaying.github.io/SimpleBattleShipGame/index.html",
    slug: "battleship-game-play",
  },
  {
    title: projectName[3],
    photo: photoData4,
    languages: ["PHP", "HTML", "CSS", "JavaScript", "jQuery", "SQL"],
    content:
      "It is a learning platform for students to learn the concept of sorting algorithm. User needs to register an account to use this platform. In this platform, the user is expected to understand the concept of insertion sort, selection sort, and bubble sort. Video, algorithm, time complexity and example of each type of sorting algorithm are provided. There is one exercise for each type of sorting method. Each exercise contains three levels of the question. After answer the questions, the result will be recorded and show on the profile page.",
    description:
      "Assignment of COMP3421 Web Application Design and Development - PolyU",
    github:
      "https://github.com/CarmenChanKaYing/SortingAlgorithmLearningPlatform",
    slug: "sorting-algorithm-learning-platform",
  },
]

export {
  projectThumbnailCollection,
  projectName,
  photoData1,
  photoData2,
  photoData3,
  photoData4,
  data,
}
