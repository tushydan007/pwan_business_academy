import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface CustomCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CustomCard = ({ imageUrl, title, description }: CustomCardProps) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out overflow-hidden cursor-pointer">
      {/* Image section */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          priority
          className="object-cover"
        />
      </div>

      <CardContent className="p-4">
        <CardTitle className="text-lg sm:text-xl text-red-600 mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
