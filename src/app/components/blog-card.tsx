import Image from "next/image";
import BlogPost from "../../../types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group cursor-pointer p-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <Image
          src={post.image}
          alt={`Image related to ${post.category}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 288px, (min-width: 768px) 342px, calc(100vw - 32px)"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium text-blue-600">{post.category}</span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src={post.author.avatar}
              alt={`Avatar of ${post.author.name}`}
              fill
              className="rounded-full object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-sm text-gray-600">{post.author.name}</span>
          <span className="text-sm text-gray-400">•</span>
          <time className="text-sm text-gray-600">{post.date}</time>
        </div>
      </div>
    </article>
  );
}
