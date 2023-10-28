import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
      id: 1,
      title: "Students' Guide",
      img: "https://images.pexels.com/photos/4908721/pexels-photo-4908721.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  },
  {
      id: 2,
      title: "B M Drug Centre",
      img: "https://lh3.googleusercontent.com/p/AF1QipN4NnaUpCnTZdUjdmz1t1ThFsdyQkBzs_c0tbZZ=w1080-h608-p-no-v0",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  },
  {
      id: 3,
      title: "Campus Companion",
      img: "https://images.pexels.com/photos/4908721/pexels-photo-4908721.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  },
  {
      id: 4,
      title: "Privio",
      img: "https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi cumque adipisci nisi dolore molestiae, accusantium, nam culpa excepturi fuga hic cum quas iusto fugiat atque voluptates veritatis praesentium sapiente!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
