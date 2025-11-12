'use client'
import  { useState } from "react";

const dummyNotes = [
  {
    id: 1,
    user: "capinex",
    time: "15:28 | 08 Sep 25",
    status: "CustomerDiscussion",
    description: "Customer KYC workflow initiated",
  },
  {
    id: 2,
    user: "capinex",
    time: "12:52 | 02 Sep 25",
    status: "CustomerDiscussion",
    description: "Customer KYC workflow initiated",
  },
  {
    id: 3,
    user: "capinex",
    time: "19:08 | 13 Aug 25",
    status: "CustomerDiscussion",
    description: "",
  },
  {
    id: 4,
    user: "capinex",
    time: "19:08 | 13 Aug 25",
    status: "CustomerDiscussion",
    description: "",
  },
];

function Note({ note }) {
  return (
    <div className="flex flex-col border-b border-gray-300 py-2 space-y-2">
      <div className="flex flex-row mb-2">
        <div className="w-1/3 font-inter font-semibold">{note.user}</div>
        <div className="w-1/3 text-gray-600">{note.time}</div>
        <div className="w-1/3 text-gray-800">
          Status - <span className="font-inter font-medium">{note.status}</span>
        </div>
      </div>
      {note.description && (
        <div className="text-gray-700 font-inter">{note.description}</div>
      )}
    </div>
  );
}

export default function Notes() {
  const [notes] = useState(dummyNotes);

  return (
    <div className="p-4 bg-white rounded  overflow-auto">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
