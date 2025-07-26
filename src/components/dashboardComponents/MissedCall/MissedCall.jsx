
import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import TableComponent from '@/components/dashboardComponents/TableComponent';
import MyMissedCall from './MyMissedCall';
export default function MissedCall({ activeIndex, setActiveIndex }) {
  const items = [
    { label: 'All Missed Calls' },
    { label: 'My Missed Calls' }
  ];

  return (
    <div className="overflow-hidden">
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        unstyled={true}
      />
      {activeIndex === 0 ? <TableComponent /> : <MyMissedCall />}
    </div>
  );
}


