import { notFound } from "next/navigation";

// const BLOG_POSTS = [
//   {
//     id: "1",
//     slug: "PS5-Review",
//     title: "From Stunning Graphics to Lightning-Fast Load Times: Why PS5 Stands Out",
//     category: "Technology",
//     image: "/p1.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a1.png",
//     },
//     date: "August 20, 2022",
//     content: "",
//   },
//   {
//     id: "2",
//     slug: "Island-Life",
//     title: "The Allure of Island Life: Sun, Sand, and Serenity",
//     category: "Technology",
//     image: "/p2.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a2.png",
//     },
//     date: "August 20, 2022",
//     content: "This is the detailed content for the second blog post.",
//   },
//   {
//     id: "3",
//     slug: "guide-to-smartphones",
//     title: "Your Ultimate Guide to the Best Smartphones of 2024",
//     category: "Technology",
//     image: "/p3.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a3.png",
//     },
//     date: "August 20, 2022",
//     content: "This is the detailed content for the third blog post.",
//   }, {
//     id: "4",
//     slug: "Car-Maintenance",
//     title: "How to Maintain Your Car and Extend Its Lifespan",
//     category: "Technology",
//     image: "/p4.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a1.png",
//     },
//     date: "August 20, 2022",
//   },
//   {
//     id: "5",
//     slug: "nature-healing",
//     title: "The Healing Power of Nature: Benefits for Mind, Body, and Soul",
//     category: "Technology",
//     image: "/p5.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a2.png",
//     },
//     date: "August 20, 2022",
//   },
//   {
//     id: "6",
//     slug: "beach-activities",
//     title: "Beach Activities: Fun Things to Do at the Shore",
//     category: "Technology",
//     image: "/p9.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a3.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: "7",
//     slug: "property-ownership",
//     title: "Finding Your Dream Home: A Guide to Property Ownership",
//     category: "Technology",
//     image: "/p6.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a1.png",
//     },
//     date: "August 20, 2022",
//   },
//   {
//     id: "8",
//     slug: "luxury-cars-2024",
//     title: "Luxury Cars in 2024: What’s Hot and What’s Not",
//     category: "Technology",
//     image: "/p7.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a2.png",
//     },
//     date: "August 20, 2022",
//   },
//   {
//     id: "9",
//     slug: "luxury-tours-2024",
//     title: "Luxury Tours: Indulge in the Best of Travel Experiences",
//     category: "Technology",
//     image: "/p8.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a3.png",
//     },
//     date: "August 20, 2022",
//   },
//   // Add more posts as needed
// ];
// // import { notFound } from "next/navigation";

// // const BLOG_POSTS = [
// //   // ... Blog post data
// // ];

// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   // Find the post based on the slug
//   const post = BLOG_POSTS.find((post) => post.slug === slug);

//   if (!post) {
//     notFound(); // Returns a 404 page if the post is not found
//   }

//   return (
//     <article className="max-w-4xl mx-auto py-12 px-4">
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-64 object-cover rounded-lg shadow-lg"
//       />
//       <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
//       <p className="text-gray-600 mt-2">{post.date}</p>
//       <div className="flex items-center mt-4">
//         <img
//           src={post.author.avatar}
//           alt={post.author.name}
//           className="w-10 h-10 rounded-full"
//         />
//         <p className="ml-3 font-medium">{post.author.name}</p>
//       </div>
      
//       <div className="mt-8 text-lg text-gray-700 space-y-8">
//         <div dangerouslySetInnerHTML={{ __html: post.content }} />
//       </div>
//     </article>
//   );
// }


// import { notFound } from "next/navigation";

// Define the types for the post and author
interface Author {
  name: string;
  avatar: string;
}

interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  author: Author;
  date: string;
  content: string;
}

// Define the blog posts array
const BLOG_POSTS: BlogPostData[] = [
 {
    id: "1",
    slug: "PS5-Review",
    title: "From Stunning Graphics to Lightning-Fast Load Times: Why PS5 Stands Out",
    category: "Technology",
    image: "/p1.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a1.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction to PS5</h2>
      <p class="dark:text-gray-300">The PlayStation 5 (PS5) has taken the gaming world by storm, offering cutting-edge technology and a breathtaking gaming experience. Its powerful hardware, enhanced graphics, and fast loading times make it a top choice for gamers worldwide.</p>
      <p class="dark:text-gray-300">In this review, we’ll take a deep dive into the PS5’s features, performance, and exclusive games that set it apart from its predecessors and competitors. Whether you’re a casual gamer or a die-hard fan, this review covers everything you need to know.</p>
      <p class="dark:text-gray-300">Let’s explore why the PS5 is a must-have console for next-gen gaming enthusiasts.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Unparalleled Graphics and Performance</h2>
      <p class="dark:text-gray-300">The PS5 is powered by a custom RDNA 2 GPU and a high-speed SSD, delivering stunning graphics and smooth performance. With support for ray tracing, the PS5 offers hyper-realistic lighting and reflections, making games look better than ever before.</p>
      <p class="dark:text-gray-300">The system's quick load times, thanks to the ultra-fast SSD, ensure that you spend less time waiting and more time playing. Games like *Spider-Man: Miles Morales* and *Demon’s Souls* show off the console's full potential, offering visually stunning experiences that are immersive and breathtaking.</p>
      <p class="dark:text-gray-300">Additionally, the PS5 supports 4K gaming at 120Hz, future-proofing it for upcoming 4K monitors and TV sets.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">DualSense Controller: A Revolutionary Experience</h2>
      <p class="dark:text-gray-300">The PS5’s DualSense controller is a game-changer, offering immersive haptic feedback and adaptive triggers that respond to in-game actions. Whether you're firing a bow or driving a car, the controller’s responsiveness makes you feel every action.</p>
      <p class="dark:text-gray-300">Moreover, the built-in microphone and USB-C charging add to the convenience, while the controller's ergonomic design ensures comfort during long gaming sessions.</p>
      <p class="dark:text-gray-300">Overall, the DualSense controller enhances immersion and is one of the standout features of the PS5 experience.</p>
    `,
},
  {
    id: "2",
    slug: "Island-Life",
    title: "The Allure of Island Life: Sun, Sand, and Serenity",
    category: "Technology",
    image: "/p2.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a2.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction to Island Life</h2>
      <p class="dark:text-gray-300">Island life offers a unique blend of natural beauty, tranquility, and adventure. Whether it’s the allure of sun-kissed beaches, crystal-clear waters, or the slow pace of life, islands provide a sanctuary for those seeking peace and relaxation.</p>
      <p class="dark:text-gray-300">This post takes a deep dive into the charm of island life and what makes it a dream destination for many. From stunning landscapes to the distinct island culture, we’ll explore all that makes island life so appealing.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Sun, Sand, and Serenity</h2>
      <p class="dark:text-gray-300">The beach is the heart of island life, offering visitors the chance to unwind, enjoy the sunshine, and soak in the beauty of the ocean. Whether it’s lounging on the beach, enjoying water sports, or simply watching the sunset, island beaches provide the perfect backdrop for relaxation and adventure.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Island Culture and Lifestyle</h2>
      <p class="dark:text-gray-300">Living on an island means immersing yourself in a slower-paced lifestyle. With less hustle and bustle, islanders enjoy a stronger sense of community, vibrant cultural traditions, and a deep connection to nature. From local festivals to fresh seafood, island life offers a refreshing break from the norm.</p>
    `,
  },
  {
    id: "3",
    slug: "guide-to-smartphones",
    title: "Your Ultimate Guide to the Best Smartphones of 2024",
    category: "Technology",
    image: "/p3.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a3.png",
    },
    date: "August 20, 2022",
    content:  `
    <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Smartphone Trends of 2024</h2>
    <p class="dark:text-gray-300">The smartphone industry continues to evolve at an unprecedented rate, and 2024 is shaping up to be another year full of innovation. From foldable displays to 5G connectivity, the latest smartphones promise to push the boundaries of what’s possible in mobile technology.</p>
    <p class="dark:text-gray-300">This guide will highlight the top smartphones of 2024, their features, and what makes them stand out from the competition.</p>

    <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Top Smartphones for 2024</h2>
    <p class="dark:text-gray-300">As we move into 2024, several flagship smartphones are making waves in the tech world. Leading brands like Apple, Samsung, and Google are pushing the limits of hardware and software to offer users the best possible mobile experience.</p>
    <p class="dark:text-gray-300">From AI-powered cameras to powerful processors, we’ll take a look at the standout features and specifications of the best smartphones of 2024.</p>

    <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Innovative Features to Watch</h2>
    <p class="dark:text-gray-300">In 2024, we’re seeing more devices with advanced AI features, faster processors, and improved battery life. Devices with innovative displays like foldable screens and under-display cameras are also becoming more mainstream. These features are not just exciting—they’re also practical and enhance user experience.</p>
  `,
  },  {
    id: "4",
    slug: "Car-Maintenance",
    title: "How to Maintain Your Car and Extend Its Lifespan",
    category: "Technology",
    image: "/p4.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a1.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: The Importance of Car Maintenance</h2>
      <p class="dark:text-gray-300">Owning a car comes with the responsibility of ensuring it runs smoothly for years to come. Proper maintenance not only enhances the safety and performance of your vehicle, but it also helps to extend its lifespan, saving you money in the long term. In this post, we’ll discuss essential car maintenance practices that every car owner should follow.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">1. Regular Oil Changes</h2>
      <p class="dark:text-gray-300">One of the most vital aspects of car maintenance is regularly changing the oil. Engine oil lubricates the engine components, reducing friction and preventing overheating. Over time, oil breaks down and loses its effectiveness. Changing the oil as per your car's manual will keep the engine in top condition and help avoid costly repairs.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">2. Tire Care: Pressure and Rotation</h2>
      <p class="dark:text-gray-300">Maintaining proper tire pressure is essential for the safety and efficiency of your car. Low tire pressure can cause poor fuel economy, reduce handling, and lead to tire wear. Check the tire pressure monthly and keep it at the recommended level. Regular tire rotation helps to ensure even wear, extending the lifespan of your tires.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">3. Brake Inspections</h2>
      <p class="dark:text-gray-300">Brakes are one of the most critical safety features in any vehicle. It’s essential to check your brakes regularly for wear and tear. Squeaking or grinding noises can be a sign that the brake pads need to be replaced. Delaying brake maintenance can compromise your safety and lead to expensive repairs, so don’t ignore any warning signs.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">4. Replace Air Filters and Spark Plugs</h2>
      <p class="dark:text-gray-300">Air filters ensure that the air entering the engine is clean and free of debris. Clogged filters can reduce engine performance and fuel efficiency. Spark plugs are responsible for igniting the fuel in the engine. Over time, they can become dirty or worn out, affecting engine performance. Regularly replacing these components will keep your car running smoothly.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">5. Check and Replace Fluids</h2>
      <p class="dark:text-gray-300">In addition to oil, other essential fluids in your car, like coolant, brake fluid, transmission fluid, and power steering fluid, should be checked regularly. Low or dirty fluids can lead to overheating, poor performance, and premature wear of the car’s components. Be sure to replace or top up fluids as recommended in your owner’s manual.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">6. Keep the Exterior and Interior Clean</h2>
      <p class="dark:text-gray-300">Washing your car regularly prevents dirt and grime from damaging the paint and can help to prevent rust. Don’t forget the interior! Regularly vacuuming and cleaning the upholstery helps maintain the condition of your car and enhances your driving experience. Cleaning your car also helps preserve its value over time.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Conclusion: A Small Investment for Long-Term Savings</h2>
      <p class="dark:text-gray-300">Maintaining your car is an investment that pays off in the form of fewer repairs, better performance, and increased safety. Regular maintenance ensures that your car continues to serve you well for many years. By following these simple car care tips, you can extend the lifespan of your vehicle and avoid unexpected breakdowns. So, take care of your car, and it will take care of you!</p>
    `,
  },
  {
    id: "5",
    slug: "nature-healing",
    title: "The Healing Power of Nature: Benefits for Mind, Body, and Soul",
    category: "Technology",
    image: "/p5.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a2.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: The Connection Between Nature and Well-Being</h2>
      <p class="dark:text-gray-300">In today's fast-paced world, it’s easy to forget the importance of spending time in nature. However, research shows that connecting with nature can provide numerous benefits for our physical and mental well-being. Whether it’s a walk in the park or a weekend getaway to the mountains, nature has a powerful healing effect on the mind, body, and soul. In this post, we’ll explore the science behind nature’s healing powers and how you can harness them for a healthier, happier life.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">1. Stress Reduction and Mental Clarity</h2>
      <p class="dark:text-gray-300">Spending time in nature helps lower cortisol levels (the stress hormone), which leads to a reduction in anxiety and stress. Natural environments provide a peaceful, calming effect, helping to clear your mind and restore mental clarity. Whether you’re hiking in the woods, strolling along the beach, or just sitting under a tree, nature offers a mental reset that’s hard to find in urban settings.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">2. Boosts Immune Function</h2>
      <p class="dark:text-gray-300">Nature can also play a role in boosting our physical health. Studies have shown that time spent outdoors can enhance immune function, making it easier for your body to fight off illnesses. Exposure to fresh air, sunlight, and natural elements strengthens the body’s defenses and promotes better overall health.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">3. Enhances Creativity and Problem-Solving</h2>
      <p class="dark:text-gray-300">If you’re feeling stuck or in need of inspiration, nature can help. Studies indicate that spending time outdoors enhances creativity and problem-solving abilities. Nature’s calming and stimulating effects allow your mind to think outside the box and approach challenges with fresh perspectives.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">4. Improved Physical Health</h2>
      <p class="dark:text-gray-300">Not only does nature benefit the mind, but it can also improve your physical health. Outdoor activities like walking, jogging, or cycling contribute to cardiovascular health and muscle strength. Even simply being outdoors in the fresh air can lower blood pressure and reduce the risk of chronic diseases.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">5. Emotional Balance and Spiritual Growth</h2>
      <p class="dark:text-gray-300">Nature provides a sense of tranquility and grounding that can help to restore emotional balance. Many people find that spending time outdoors fosters spiritual growth and a deeper connection with themselves. Whether you meditate in nature or simply take a mindful walk, you’ll likely experience an emotional and spiritual recharge.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Conclusion: Embrace Nature for a Healthier Life</h2>
      <p class="dark:text-gray-300">Nature offers a multitude of benefits that positively impact our mind, body, and soul. By spending more time outdoors, we can experience improved mental clarity, physical health, emotional balance, and spiritual growth. So, take a break from technology, step outside, and let the healing power of nature rejuvenate you.</p>
    `,
  },
  {
    id: "6",
    slug: "beach-activities",
    title: "Beach Activities: Fun Things to Do at the Shore",
    category: "Technology",
    image: "/p9.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a3.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: Why the Beach Is the Ultimate Getaway</h2>
      <p class="dark:text-gray-300">The beach is more than just a place to soak up the sun; it’s a destination for adventure, relaxation, and fun. Whether you’re looking to engage in exciting water sports or simply unwind with a good book, the beach has something for everyone. In this post, we’ll explore some fun beach activities to make the most of your time at the shore.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">1. Beach Volleyball</h2>
      <p class="dark:text-gray-300">Beach volleyball is a classic beach activity that combines fitness, fun, and friendly competition. Whether you’re playing with friends or strangers, a good game of volleyball can be the perfect way to break a sweat and enjoy the sunny weather. All you need is a volleyball, a net, and a beach to play on!</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">2. Swimming and Snorkeling</h2>
      <p class="dark:text-gray-300">The water is the main attraction at the beach, and swimming is one of the best ways to cool off on a hot day. If you’re near a clear, calm sea, snorkeling can offer a fantastic opportunity to explore the underwater world. Witness colorful fish, coral reefs, and marine life up close while enjoying the calming effects of the ocean.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">3. Surfing or Paddleboarding</h2>
      <p class="dark:text-gray-300">If you're up for an adrenaline rush, surfing or paddleboarding might be the perfect activities for you. Both sports allow you to connect with the water and enjoy the thrill of riding waves or gliding over calm waters. If you're a beginner, there are plenty of surf schools offering lessons to help you get started.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">4. Sandcastle Building</h2>
      <p class="dark:text-gray-300">Sandcastle building is a timeless beach activity that’s fun for all ages. Whether you’re crafting intricate castles or simply enjoying the creative process, there’s something satisfying about sculpting the sand with your hands. Get a bucket, some shovels, and let your imagination run wild!</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">5. Beach Yoga or Meditation</h2>
      <p class="dark:text-gray-300">The beach is an ideal place for yoga or meditation. The gentle sounds of the waves, the fresh ocean breeze, and the warmth of the sun create the perfect environment for relaxation. Try a morning yoga session on the sand to start your day with peace and mindfulness.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">6. Beach Games</h2>
      <p class="dark:text-gray-300">There are plenty of games to enjoy on the beach, from frisbee and paddleball to kite flying and beach soccer. Bring along some fun beach games to entertain the family or gather a group for an impromptu match. The beach is a fantastic place for friendly competition and laughter.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Conclusion: The Beach Is Your Playground</h2>
      <p class="dark:text-gray-300">Whether you want to relax, exercise, or try something new, the beach offers a wide range of activities to suit every mood and interest. So, the next time you visit the shore, make sure to try out some of these fun beach activities. The sun, sand, and sea are waiting for you!</p>
    `,
  },
  {
    id: "7",
    slug: "property-ownership",
    title: "Finding Your Dream Home: A Guide to Property Ownership",
    category: "Technology",
    image: "/p6.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a1.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: The Journey to Property Ownership</h2>
      <p class="dark:text-gray-300">Finding your dream home is an exciting yet often overwhelming process. Whether you're a first-time buyer or looking to upgrade, purchasing property involves many steps that can be both rewarding and daunting. In this post, we’ll guide you through the essential steps in the property-buying process to help you find and secure the home of your dreams.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">1. Assess Your Budget and Financing Options</h2>
      <p class="dark:text-gray-300">Before you begin your search, it’s important to assess your financial situation. Determine how much you can afford for a down payment and monthly mortgage payments. Get pre-approved for a mortgage loan to understand your budget and narrow down your options. A clear financial picture will help you make informed decisions.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">2. Define Your Must-Haves</h2>
      <p class="dark:text-gray-300">Make a list of features that are essential to your new home. This could include the number of bedrooms, proximity to work or school, outdoor space, and more. Understanding your needs will help you narrow down your search and avoid wasting time on properties that don’t meet your criteria.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">3. Research Neighborhoods</h2>
      <p class="dark:text-gray-300">Location is key when choosing your dream home. Research potential neighborhoods to find one that fits your lifestyle and needs. Consider factors such as safety, amenities, schools, and public transportation. Take time to visit the neighborhoods in person to get a feel for the area before making a decision.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">4. Work with a Real Estate Agent</h2>
      <p class="dark:text-gray-300">A skilled real estate agent can help you navigate the home-buying process. They can assist with finding properties that meet your criteria, negotiate on your behalf, and help you avoid common pitfalls. Make sure to choose an agent who understands your needs and is experienced in the local market.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">5. Schedule Home Inspections</h2>
      <p class="dark:text-gray-300">Before finalizing a deal, it’s essential to schedule a home inspection to ensure the property is in good condition. A thorough inspection can uncover hidden problems, such as structural issues or plumbing defects, that may affect the home’s value or your future living experience.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Conclusion: Your Dream Home Awaits</h2>
      <p class="dark:text-gray-300">Finding and purchasing your dream home is a significant milestone in life. By following these steps and staying informed, you can confidently navigate the property-buying process and make a well-informed decision. Your dream home is out there – it’s just a matter of finding it!</p>
    `,
  },
  {
    id: "8",
    slug: "luxury-cars-2024",
    title: "Luxury Cars in 2024: What’s Hot and What’s Not",
    category: "Technology",
    image: "/p7.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a2.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: A Glimpse into the Future of Luxury Cars</h2>
      <p class="dark:text-gray-300">Luxury cars are constantly evolving, blending cutting-edge technology, sleek design, and exceptional performance. As we approach 2024, the automotive industry is buzzing with exciting new releases and trends that are pushing the boundaries of what luxury cars can do. In this post, we'll explore the hottest luxury cars of 2024 and highlight those that may be losing their appeal. Whether you’re a car enthusiast or in the market for a high-end vehicle, this guide will give you the inside scoop on the best and worst of luxury cars in 2024.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">What’s Hot: The Best Luxury Cars of 2024</h2>
      <p class="dark:text-gray-300">Several luxury automakers have made a big splash in 2024 with innovative features and stunning designs. Let’s take a look at some of the most anticipated and talked-about cars:</p>

      <h3 class="font-semibold text-gray-800 mb-2">1. Tesla Model S Plaid</h3>
      <p class="dark:text-gray-300">The Tesla Model S Plaid continues to be the epitome of luxury and performance. With its mind-blowing acceleration (0 to 60 mph in under 2 seconds), incredible range, and autonomous driving capabilities, this electric powerhouse remains one of the top contenders for 2024. The updated interior offers a futuristic cabin with a minimalist design, making it a standout in the luxury electric car segment.</p>

      <h3 class="font-semibold text-gray-800 mb-2">2. Rolls-Royce Spectre</h3>
      <p class="dark:text-gray-300">Rolls-Royce has taken luxury to new heights with the Spectre, their first all-electric vehicle. This opulent coupe combines timeless design with cutting-edge electric technology. With its ultra-luxurious interior, quiet performance, and exclusive features, the Spectre is a true masterpiece for 2024. If you want to make a statement, this car is the epitome of elegance and sophistication.</p>

      <h3 class="font-semibold text-gray-800 mb-2">3. BMW iX M60</h3>
      <p class="dark:text-gray-300">The BMW iX M60 is an all-electric luxury SUV that offers thrilling performance combined with an eco-friendly powertrain. With an impressive 610 horsepower, this SUV is capable of accelerating from 0 to 60 mph in just 3.6 seconds. Inside, the iX M60 boasts a premium cabin with high-quality materials and advanced tech, making it one of the most exciting luxury EVs of 2024.</p>

      <h3 class="font-semibold text-gray-800 mb-2">4. Mercedes-Benz EQS</h3>
      <p class="dark:text-gray-300">Mercedes-Benz’s EQS electric sedan offers a perfect balance of comfort, luxury, and technology. The EQS features a spacious and luxurious cabin, a cutting-edge infotainment system, and an impressive range, making it one of the top choices for 2024. With its smooth, quiet ride and advanced driver assistance features, the EQS is a game-changer in the luxury EV space.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">What’s Not: Cars That Are Losing Their Edge</h2>
      <p class="dark:text-gray-300">While some luxury cars are leading the charge, others are starting to feel outdated in comparison to newer models. Here are some cars that might be losing their appeal in 2024:</p>

      <h3 class="font-semibold text-gray-800 mb-2">1. Cadillac CT6</h3>
      <p class="dark:text-gray-300">The Cadillac CT6, once a top contender in the luxury sedan market, is being overshadowed by newer, more technologically advanced models. While still a comfortable and capable vehicle, the CT6 lacks the cutting-edge features found in other 2024 luxury sedans. Cadillac has opted to discontinue the CT6, making it a less desirable option for buyers looking for the latest in luxury.</p>

      <h3 class="font-semibold text-gray-800 mb-2">2. Infiniti Q70</h3>
      <p class="dark:text-gray-300">The Infiniti Q70 has been in production for several years and has struggled to keep up with competitors. Despite its luxurious interior and smooth ride, the Q70 is starting to show its age. In 2024, buyers are opting for more modern alternatives, with advanced tech features and better performance, leaving the Q70 behind.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Conclusion: The Future Is Bright for Luxury Cars</h2>
      <p class="dark:text-gray-300">As we look ahead to 2024, it’s clear that luxury cars are evolving to meet the demands of an eco-conscious, tech-savvy world. Whether you’re in the market for a performance-packed electric car or a traditional luxury sedan, the choices are better than ever. By staying on top of trends and understanding what’s hot and what’s not, you can make an informed decision when it’s time to buy your next luxury vehicle.</p>
    `,
  },
  {
    id: "9",
    slug: "luxury-tours-2024",
    title: "Luxury Tours: Indulge in the Best of Travel Experiences",
    category: "Technology",
    image: "/p8.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a3.png",
    },
    date: "August 20, 2022",
    content: `
      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: The Rise of Luxury Travel in 2024</h2>
      <p class="dark:text-gray-300">In 2024, luxury travel is all about offering exclusive, once-in-a-lifetime experiences to discerning travelers. Whether you’re looking for a private yacht cruise through the Mediterranean or an opulent safari in Africa, luxury tours are designed to cater to your every need. In this post, we’ll explore the top luxury travel experiences for 2024, offering a glimpse into the world of indulgence and adventure.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">1. Private Yacht Charters in the Mediterranean</h2>
      <p class="dark:text-gray-300">The Mediterranean remains one of the top luxury travel destinations in 2024, with private yacht charters offering the ultimate escape. Imagine cruising through crystal-clear waters, stopping at exclusive islands, and enjoying world-class amenities onboard. With a personal crew, gourmet dining, and all the privacy you could desire, a yacht charter is the perfect way to explore the Mediterranean in style.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">2. Private Jet Tours to Exotic Destinations</h2>
      <p class="dark:text-gray-300">Private jet tours have become increasingly popular for travelers seeking ultimate luxury. These exclusive tours allow you to visit some of the world’s most exotic destinations without the hassle of commercial flights. Whether you’re visiting the pyramids of Egypt, the beaches of Bora Bora, or the vineyards of France, a private jet tour ensures you travel in comfort, style, and privacy.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">3. Luxury Safari Adventures in Africa</h2>
      <p class="dark:text-gray-300">A luxury safari in Africa offers a thrilling yet comfortable way to experience the continent’s wildlife. Stay in five-star lodges and take guided tours through some of the world’s most famous national parks, including the Serengeti and Kruger National Park. These safaris are designed to give you an intimate, exclusive look at nature while ensuring the utmost comfort and luxury.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">4. Antarctic Cruises and Expeditions</h2>
      <p class="dark:text-gray-300">For the ultimate bucket-list experience, consider embarking on a luxury cruise to Antarctica. This once-in-a-lifetime journey takes you to the ends of the Earth, offering breathtaking views of glaciers, icebergs, and wildlife such as penguins and seals. Luxury cruises to Antarctica offer unparalleled comfort, with fine dining, spacious cabins, and expert guides to lead you through this remote, awe-inspiring destination.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">5. Luxury Wine Tours in Napa Valley</h2>
      <p class="dark:text-gray-300">Napa Valley is known for its world-class wineries, and in 2024, luxury wine tours are one of the best ways to explore this renowned region. Private tours take you through scenic vineyards, where you can sample the finest wines, enjoy gourmet food pairings, and learn about the winemaking process. With personal guides and exclusive access to top wineries, these tours offer an unforgettable experience for wine enthusiasts.</p>

      <h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Conclusion: Luxury Travel in 2024</h2>
      <p class="dark:text-gray-300">Luxury tours in 2024 offer the ultimate in exclusivity, comfort, and unique experiences. Whether you're cruising through the Mediterranean on a private yacht, enjoying a safari in Africa, or exploring the winemaking regions of Napa Valley, there’s a world of indulgence waiting for you. With luxury travel experiences like these, it’s easier than ever to indulge in the best of what the world has to offer.</p>
    `,
  },
];

interface BlogPostProps {
  params: {
    slug: string;
  };
}
export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;


  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    notFound(); 
    return null; 
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 lg:px-6 dark:text-gray-300 text-black">
    {/* Image Section */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src={post.image}
        alt={`Image for ${post.title}`}
        className="w-full h-64 sm:h-96 object-cover"
      />
    </div>

    {/* ttl section */}
    <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-900 dark:text-gray-100">
      {post.title}
    </h1>
    <p className="text-sm text-gray-500 mt-2">{post.date}</p>

    {/* aauthor info */}
    <div className="flex items-center mt-4">
      <img
        src={post.author.avatar}
        alt={`Avatar of ${post.author.name}`}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-600"
      />
      <p className="ml-3 font-medium text-gray-900 dark:text-gray-400">
        {post.author.name}
      </p>
    </div>

    {/* content ssction */}
    <div className="mt-8 text-base sm:text-lg leading-relaxed dark:text-gray-400 text-gray-800 space-y-6">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  </article>
  );
}
