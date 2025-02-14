import { useState } from "react";
import { Button } from "@/components/ui/button";
import NoDataPresent from "../NotFound/NoDataPresent";
import PaginationSection from "@/components/Pagination/PaginationSection";
import ShimmerCard from "../../components/Shimmer/ShimmerCard";
import CardSection from "../../components/CardSection/CardSection";


const HospitalsList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = hospitals.slice(firstItemIndex, lastItemIndex);

  const fetchHospitals = async () => {
    setLoading(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation({ lat, lng });

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=hospital+near+${lat},${lng}`
          );
          const data = await response.json();
          setHospitals(data);
        } catch (error) {
          setError("Failed to fetch hospital data.");
          console.error("Error fetching hospitals:", error);
        }

        setLoading(false);
      },
      (error) => {
        setError("Unable to retrieve your location.");
        setLoading(false);
        console.error("Error fetching location:", error);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="min-h-screen grid xs:grid-rows-6 sm:grid-cols-4">
      <div className="w-full bg-gray-300 dark:bg-[#141413] shadow-lg p-6 text-center text-gray-900 sm:col-span-1 xs:row-span-1">
        <h1 className="text-3xl dark:text-white font-extrabold mb-6">
          Find Hospitals
        </h1>

        <Button onClick={fetchHospitals} className="w-full" disabled={loading}>
          {loading ? "Fetching Hospitals..." : "Find Nearby Hospitals"}
        </Button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      <div className="sm:col-span-3 xs:row-span-5 p-6">
        {loading ? (
          <ShimmerCard count={9} />
        ) : hospitals.length > 0 ? (
          <>
            <h2 className="sm:text-6xl xs:text-2xl font-semibold sm:mb-10 text-gray-900 dark:text-white ">
              Hospitals Near You: {hospitals.length}
            </h2>
            <div className="sm:mb-10">
              {hospitals.length > 0 && (
                <div className="flex justify-center md:w-full md:mt-10 xs:text-sm">
                  <PaginationSection
                    totalItems={hospitals.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((hospital, index) => (
                <CardSection key={index} hospital={hospital} />
              ))}
            </div>
          </>
        ) : (
          <NoDataPresent message="No hospitals found yet. Click the button to search." />
        )}
      </div>
    </div>
  );
};

export default HospitalsList;
