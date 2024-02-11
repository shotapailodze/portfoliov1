import React, { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Admin Dashboard',
    img: 'https://m.media-amazon.com/images/I/71c292i0fkL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum, saepe expedita quo eligendi corrupti ut eveniet repellendus minima esse vel dicta aspernatur quam veritatis cupiditate facilis pariatur molestias voluptates.',
  },
  {
    id: 1,
    title: 'React Admin Dashboard',
    img: 'https://m.media-amazon.com/images/I/71c292i0fkL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum, saepe expedita quo eligendi corrupti ut eveniet repellendus minima esse vel dicta aspernatur quam veritatis cupiditate facilis pariatur molestias voluptates.',
  },
  {
    id: 1,
    title: 'React Admin Dashboard',
    img: 'https://m.media-amazon.com/images/I/71c292i0fkL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum, saepe expedita quo eligendi corrupti ut eveniet repellendus minima esse vel dicta aspernatur quam veritatis cupiditate facilis pariatur molestias voluptates.',
  },
  {
    id: 1,
    title: 'React Admin Dashboard',
    img: 'https://m.media-amazon.com/images/I/71c292i0fkL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum, saepe expedita quo eligendi corrupti ut eveniet repellendus minima esse vel dicta aspernatur quam veritatis cupiditate facilis pariatur molestias voluptates.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
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
    offset: ['end end', 'start start'],
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
