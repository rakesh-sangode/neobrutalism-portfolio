import React from "react";
import { useEffect, useState } from 'react';
import Loader from "./components/Loader";
const About: React.FC = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Show the loader on route change
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1000)

    // Cleanup the timer
    return () => clearTimeout(timer)
  }, [])
  return (
    loading ? (
      <Loader />
    ) : (
      <div>

      </div>
    ))
};

export default About;