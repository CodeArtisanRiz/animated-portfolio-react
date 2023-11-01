import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
      id: 1,
      title: "GCC Edu+",
      img: "https://techno3gamma.in/assets/img/portfolio/app0.png",
      link: "https://play.google.com/store/apps/details?id=com.t3g.gcceduplus",
      desc: "Experience the utmost convenience and efficiency of college life with GCC Edu+. This app, specifically designed for Gurucharan College, Silchar, offers an array of features to help you stay on top of your studies and stay informed about the latest happenings in the college. With GCC Edu+, you can easily access important notices, previous years' question papers, and other resources with just a few taps.",
  },
  {
      id: 2,
      title: "B M Drug Centre",
      img: "https://lh3.googleusercontent.com/p/AF1QipN4NnaUpCnTZdUjdmz1t1ThFsdyQkBzs_c0tbZZ=w1080-h608-p-no-v0",
      link: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  },
  {
      id: 3,
      title: "Campus Companion",
      img: "https://techno3gamma.in/assets/img/portfolio/app0.png",
      link: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  },
  // {
  //     id: 4,
  //     title: "Privio",
  //     img: "https://images.pexels.com/photos/4908721/pexels-photo-4908721.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="section">
      <div className="container">
        <div className="wrapper">
          <div 
          className=" p-5 sm:w-[360px] w-full rounded-2xl imageContainer" ref={ref}>
            <div>
               <img 
            className="w-full object-contain rounded-2xl"
            src={item.img} alt="" />
            </div>
           
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
