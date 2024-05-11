import React from "react";
import { Author, Post } from "../types";
import { formatTimestamp } from "../utils/format";
import { twMerge } from "tailwind-merge";

type Props = {
  author: Author;
  post: Post;
  className?: string;
};

const Card: React.FC<Props> = ({ author, post, className }) => {
  const { avatar_url, name } = author;
  const { image_url, title, body, created_at } = post;

  return (
    <div className={twMerge("w-full shadow-md bg-white divide-y rounded-sm", className)}>
      <div className="px-4 py-3 flex gap-1 items-center text-sm">
        <img className="w-8 h-8 rounded-full" src={avatar_url} alt={name} />
        <p className="text-primary font-semibold">{name}</p>
        <span className="text-gray-500">posted on {formatTimestamp(created_at)}</span>
      </div>

      <div className="p-4 flex gap-4">
        <img src={image_url} alt={title} className="w-1/4 h-full" />
        <div className="w-full">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
