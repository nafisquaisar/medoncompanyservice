import type { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const StepCard = ({ step, title, description, Icon }: StepCardProps) => {
  return (
    <div className="relative h-full pt-4">
      
      {/* Step number – OUTSIDE CARD */}
      <div className="absolute -top-2 left-5 z-20 h-10 w-10 rounded-xl bg-primary text-white
                      flex items-center justify-center text-sm font-bold
                      shadow-lg shadow-primary/30 ring-4 ring-white">
        {step}
      </div>

      {/* CARD */}
      <div
        className="
          group relative h-full overflow-hidden
          rounded-2xl
          border border-gray-100
          bg-white
          p-6 pt-10
          flex flex-col
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-xl hover:shadow-primary/5
          hover:border-primary/10
        "
      >
        {/* Icon */}
        <div
          className="
            relative z-10 mb-4 flex h-11 w-11 items-center justify-center
            rounded-xl bg-primary-light text-primary
            transition-all duration-300
            group-hover:bg-primary group-hover:text-white
            group-hover:shadow-md group-hover:shadow-primary/20
          "
        >
          <Icon size={20} />
        </div>

        {/* Content */}
        <h3 className="relative z-10 text-base font-bold text-primary leading-snug">
          {title}
        </h3>

        <p className="relative z-10 mt-2 text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
