import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "../RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title: "How do I use express as a custom server in NextJS?",
    },
    {
      _id: "2",
      title: "Cascading Deletes in MongoDB?",
    },
    {
      _id: "3",
      title: "How to perfectly center a div usign TailwindCSS?",
    },
    {
      _id: "4",
      title: "Async/Await vs Promises in JavaScript?",
    },
    {
      _id: "4",
      title:
        "Whats the main difference between React and Vue? Should i learn both?",
    },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", totalQuestions: 5 },
    { _id: "2", name: "react", totalQuestions: 7 },
    { _id: "3", name: "next", totalQuestions: 10 },
    { _id: "4", name: "vue", totalQuestions: 3 },
    { _id: "5", name: "redux", totalQuestions: 15 },
  ];
  return (
    <section className=" background-light900_dark200 light-border sticky right-0 top-0 flex h-screen  flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px] custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/'${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              ></Image>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
