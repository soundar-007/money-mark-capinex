'use client'; // ✅ This ensures it's a Client Component

import React, { useState } from 'react';
import MissedCall from '../dashboardComponents/MissedCall/MissedCall';

export default function MissedCallWrapper() {
  
  const [activeIndex, setActiveIndex] = useState(0);

  return <MissedCall activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
}
