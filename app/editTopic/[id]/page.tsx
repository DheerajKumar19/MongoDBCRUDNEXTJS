import EditTopicform from "@/Components/EditTopicform";
import React from "react";

const getTopicByID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Could not get the topic");
    }
    return res.json();
  } catch (error) {
    console.log("Error!", error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicByID(id);
  const { title, description } = topic;

  return <EditTopicform id={id} title={title} description={description} />;
};

export default page;
