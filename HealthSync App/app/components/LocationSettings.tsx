import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, MapPin, Save } from "lucide-react";
import { toast } from "sonner";

export function LocationSettings() {
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState({
    street: "123 Main Street",
    city: "San Francisco",
    state: "California",
    zipCode: "94102",
    country: "United States"
  });

  const handleSave = () => {
    toast.success("Location saved successfully!");
    navigate("/settings");
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 flex flex-col overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-white px-6 pt-16 pb-6 shadow-sm">
          <button
            onClick={() => navigate("/settings")}
            className="mb-4 text-gray-400"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Location</h1>
          <p className="text-gray-600 mt-2">Set your address for location-based features</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Map Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
              <MapPin size={64} className="text-white" />
            </div>
          </div>

          {/* Address Form */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Address Information</h3>

            <div className="space-y-4">
              {/* Street Address */}
              <div>
                <label htmlFor="street" className="block text-sm font-semibold text-gray-700 mb-2">
                  STREET ADDRESS
                </label>
                <input
                  id="street"
                  type="text"
                  value={locationData.street}
                  onChange={(e) => setLocationData({ ...locationData, street: e.target.value })}
                  placeholder="Enter street address"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  CITY
                </label>
                <input
                  id="city"
                  type="text"
                  value={locationData.city}
                  onChange={(e) => setLocationData({ ...locationData, city: e.target.value })}
                  placeholder="Enter city"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>

              {/* State & Zip Code */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    STATE/PROVINCE
                  </label>
                  <input
                    id="state"
                    type="text"
                    value={locationData.state}
                    onChange={(e) => setLocationData({ ...locationData, state: e.target.value })}
                    placeholder="State"
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                    ZIP CODE
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    value={locationData.zipCode}
                    onChange={(e) => setLocationData({ ...locationData, zipCode: e.target.value })}
                    placeholder="Zip"
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  COUNTRY
                </label>
                <select
                  id="country"
                  value={locationData.country}
                  onChange={(e) => setLocationData({ ...locationData, country: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Save Location
          </button>

          {/* Info */}
          <div className="bg-yellow-50 rounded-2xl p-4 border-l-4 border-yellow-500 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Your location is used for features like weather-based activity suggestions and finding nearby fitness centers.
            </p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
