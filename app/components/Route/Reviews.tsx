import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge university",
    comment:
"Code to Destiny is an absolute game-changer! As someone who entered the course with minimal coding knowledge, I was blown away by the comprehensive curriculum and the supportive learning environment. The instructors go above and beyond to ensure every student grasps the concepts, and the 1:1 doubt support is priceless. Not only did I gain expertise in the MERN stack, but I also received 100% job assistance, which landed me a dream job in no time. If you're serious about becoming a skilled full-stack developer and securing your future, look no further than Code to Destiny!"},
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full stack developer | Quarter ltd.",
    comment:
"The journey at Code to Destiny has been nothing short of transformative. From the flexible learning options accommodating my busy schedule to the personalized TA sessions and beginner-friendly approach, every aspect of this course is designed for success. The emphasis on practical, hands-on projects allowed me to build a strong portfolio, making me stand out in the competitive tech industry. Plus, knowing that I'm contributing to addressing youth unemployment in Manipur by becoming job-ready after this course is truly fulfilling. If you're ready to unlock your potential and embark on an exciting career in tech, Code to Destiny is the place to be!"},
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "computer systems engineering student | Zimbabwe",
    comment:
"Enrolling in Code to Destiny was the best decision I ever made for my career. The instructors' passion for teaching and dedication to our success is palpable in every class. Not only did I gain mastery in the MERN stack, but I also learned invaluable problem-solving and critical thinking skills that are essential in the tech world. The 100% job assistance is not just a promise; it's a reality. Within weeks of completing the course, I had multiple job offers on the table. If you're looking for a transformative learning experience that will catapult your career to new heights, look no further than Code to Destiny!"},  
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Web Developer | Indonesia",
    comment:

"Code to Destiny exceeded all my expectations! From day one, I felt supported and encouraged to push my boundaries and explore the world of full-stack development. The course structure is well-paced and beginner-friendly, making complex concepts easy to understand. What sets Code to Destiny apart is its unwavering commitment to each student's success. The 1:1 doubt support and TA sessions provided me with the guidance I needed to overcome challenges and excel in my learning journey. With job assistance guaranteed, I now feel confident and prepared to pursue lucrative opportunities in the tech industry. If you're ready to unleash your potential and embark on a rewarding career path, Code to Destiny is the ultimate launchpad!"},
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full stack web developer | Algeria",
    comment:
"Enrolling in Code to Destiny was a game-changer for me. As someone with a passion for technology but limited coding experience, I was thrilled to discover a course that not only teaches the fundamentals of full-stack development but also provides the support and resources needed to succeed. The instructors' expertise and enthusiasm are contagious, making learning a truly enjoyable experience. What's more, the flexible learning options allowed me to balance my studies with other commitments, ensuring I never fell behind. Thanks to Code to Destiny, I now have the skills and confidence to pursue my dream job in the tech industry. If you're ready to take your career to the next level, don't hesitate to join Code to Destiny!"},
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full stack web developer | Canada",
    comment:
"Code to Destiny is a game-changer for anyone looking to break into the world of full-stack development. The curriculum is comprehensive, covering everything from the basics to advanced topics in the MERN stack. But what truly sets this course apart is its focus on real-world applications and practical skills. Through hands-on projects and collaborative exercises, I was able to gain valuable experience and build a portfolio that impressed potential employers. The job assistance provided by Code to Destiny is unparalleled, with personalized support and guidance every step of the way. Whether you're a complete beginner or an experienced coder looking to upskill, Code to Destiny is the perfect place to kickstart your career in tech!"},
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p>
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;
