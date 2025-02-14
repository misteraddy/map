import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShimmerCard = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="shadow-lg animate-pulse dark:text-white">
          <CardHeader>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          </CardHeader>
          <CardContent>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShimmerCard;
