import React from "react";
import { motion } from "framer-motion";
import number01 from "../../assets/number01.png";
import number02 from "../../assets/number02.png";
import number03 from "../../assets/number03.png";
import number04 from "../../assets/number04.png";
import stair from "../../assets/stair.png";
import platform from "../../assets/platform.png";
import StepsTextContent from "../StepsTextContent/StepsTextContent";
import "./AnimatedTower.css";

const AnimatedTower = () => {
  const steps = [
    { id: 1, number: number01, delay: 0 },
    { id: 2, number: number02, delay: 0.5 },
    { id: 3, number: number03, delay: 1 },
    { id: 4, number: number04, delay: 1.5, noStairs: true },
  ];

  return (
    <div className="tower-container">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className={`tower-step step-${index} platform-step-${step.id}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: step.delay }}
        >
          <motion.img
            src={platform}
            alt={`Platform for ${step.alt}`}
            className="platform-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: step.delay, duration: 0.8 }}
          />
          {!step.noStairs && (
            <div className="stairs-container">
              {[...Array(4)].map((_, stairIndex) => (
                <motion.img
                  key={stairIndex}
                  src={stair}
                  alt={`Stair ${stairIndex + 1} for ${step.alt}`}
                  className="stair-image"
                  style={{
                    marginLeft: `${stairIndex * 25}px`,
                    marginTop: `${-94}px`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: step.delay + 0.2 * (stairIndex + 1),
                    duration: 0.6,
                  }}
                />
              ))}
            </div>
          )}
          <motion.img
            src={step.number}
            alt={step.alt}
            className="number-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: step.delay + 0.8, duration: 0.8 }}
          />
        </motion.div>
      ))}
      <StepsTextContent />
    </div>
  );
};

export default AnimatedTower;
