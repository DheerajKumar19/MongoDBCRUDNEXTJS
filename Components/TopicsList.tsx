"use client";
import React from "react";
import Link from "next/link";
import { PiNotePencilBold } from "react-icons/pi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to get data");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div className="p-4 bg-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link className="text-blue-500" href={`/editTopic/${t._id}`}>
              <PiNotePencilBold size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
