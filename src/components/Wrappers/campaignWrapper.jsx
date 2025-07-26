"use client";
import React, { useState } from "react";
import Campaign from "../dashboardComponents/Campaign/Campaign";
export default function CampaignWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return <Campaign activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
}
