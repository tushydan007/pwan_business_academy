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
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden">
      {/* Full-width image at the top */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
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
        <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 text-red-600">
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
