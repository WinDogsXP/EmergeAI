"use client";
import { useEffect } from "react";
import { useState } from "react";
export default function Test() {
  let [arrivals, setArrivals] = useState();
  useEffect(() => {
    const fetchArrivals = async () => {
      try {
        const response = await fetch("/api/arrivals");
        if (response.ok) {
          const data = await response.json();
          setArrivals(data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchArrivals();
  }, []);

  return <>{arrivals}</>;
}
