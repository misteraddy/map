import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SquareActivity } from "lucide-react";

function CardSection({ hospital }) {
  return (
    <Card className="shadow-2xl overflow-hidden border dark:border-white cursor-pointer dark:hover:bg-[#290105] hover:bg-gray-100">
      <div className="flex">
        <CardHeader className="w-3/4 p-2">
          <CardTitle className="flex truncate xs:text-xs">
            {hospital.display_name.split(",")[0]}
            <SquareActivity className="text-red-600 ml-2"/>
          </CardTitle>
        </CardHeader>
      </div>

      <CardContent className="p-2">
        <p className="text-gray-600 xs:text-xs">{hospital.display_name}</p>
      </CardContent>
    </Card>
  );
}

export default CardSection;
