import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  review: string;
  rating: number;
}

const ReviewCard = ({ name, role, review, rating }: ReviewCardProps) => {
  return (
    <div
      className="
        group relative h-full
        rounded-2xl
        border border-gray-100
        bg-white
        p-6 sm:p-7
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-primary/5
        hover:border-primary/10
      "
    >
      {/* Stars */}
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 leading-relaxed text-sm italic">
        &ldquo;{review}&rdquo;
      </p>

      {/* User */}
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center">
          <span className="text-primary font-bold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-sm text-primary">{name}</h4>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
