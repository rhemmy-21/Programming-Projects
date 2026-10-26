import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Watch, Smartphone, Activity, Bluetooth, Check, X } from "lucide-react";
import { toast } from "sonner";

export function AddDevice() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState([
    { id: 1, name: "iPhone 13", type: "smartphone", status: "connected", battery: 85 }
  ]);

  const [availableDevices, setAvailableDevices] = useState([
    { id: 2, name: "Apple Watch Series 8", type: "smartwatch", status: "available" },
    { id: 3, name: "Samsung Galaxy Watch", type: "smartwatch", status: "available" },
    { id: 4, name: "Fitbit Charge 5", type: "fitness", status: "available" },
    { id: 5, name: "iPad Pro", type: "tablet", status: "available" }
  ]);

  const handleScan = () => {
    setScanning(true);
    toast.success("Scanning for devices...");

    setTimeout(() => {
      setScanning(false);
      toast.success("Scan complete!");
    }, 3000);
  };

  const handleConnect = (device: any) => {
    toast.success(`Connecting to ${device.name}...`);

    setTimeout(() => {
      setConnectedDevices([...connectedDevices, { ...device, status: "connected", battery: 92 }]);
      setAvailableDevices(availableDevices.filter(d => d.id !== device.id));
      toast.success(`${device.name} connected successfully!`);
    }, 1500);
  };

  const handleDisconnect = (device: any) => {
    const confirmed = window.confirm(`Are you sure you want to disconnect ${device.name}?`);

    if (confirmed) {
      setConnectedDevices(connectedDevices.filter(d => d.id !== device.id));
      setAvailableDevices([...availableDevices, { ...device, status: "available" }]);
      toast.success(`${device.name} disconnected`);
    }
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "smartwatch":
        return Watch;
      case "smartphone":
      case "tablet":
        return Smartphone;
      default:
        return Activity;
    }
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
          <h1 className="text-3xl font-bold text-gray-800">Add Device</h1>
          <p className="text-gray-600 mt-2">Connect your devices to sync health data</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Bluetooth Icon */}
          <div className="flex justify-center mb-6">
            <div className={`w-32 h-32 bg-gradient-to-br rounded-full flex items-center justify-center shadow-xl transition-all ${
              scanning ? 'from-blue-400 to-blue-600 animate-pulse' : 'from-purple-400 to-indigo-500'
            }`}>
              <Bluetooth size={64} className="text-white" />
            </div>
          </div>

          {/* Scan Button */}
          <button
            onClick={handleScan}
            disabled={scanning}
            className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {scanning ? "Scanning..." : "Scan for Devices"}
          </button>

          {/* Connected Devices */}
          {connectedDevices.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Connected Devices</h3>
              <div className="space-y-3">
                {connectedDevices.map((device) => {
                  const Icon = getDeviceIcon(device.type);
                  return (
                    <div key={device.id} className="bg-white rounded-2xl shadow-sm p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Icon className="text-green-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{device.name}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                              <Check size={12} />
                              Connected
                            </span>
                            <span className="text-xs text-gray-500">Battery: {device.battery}%</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDisconnect(device)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="text-red-500" size={20} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Available Devices */}
          {availableDevices.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Available Devices</h3>
              <div className="space-y-3">
                {availableDevices.map((device) => {
                  const Icon = getDeviceIcon(device.type);
                  return (
                    <div key={device.id} className="bg-white rounded-2xl shadow-sm p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Icon className="text-gray-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{device.name}</h4>
                          <span className="text-xs text-gray-500 capitalize">{device.type}</span>
                        </div>
                        <button
                          onClick={() => handleConnect(device)}
                          className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                          Connect
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Device Types Info */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Supported Devices</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Watch className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Smart Watches</p>
                  <p className="text-sm text-gray-600">Apple Watch, Samsung Galaxy Watch, Fitbit, Garmin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Mobile Devices</p>
                  <p className="text-sm text-gray-600">iOS and Android smartphones & tablets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Fitness Trackers</p>
                  <p className="text-sm text-gray-600">Fitness bands and specialized health monitors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>Sync Data:</strong> Connected devices will automatically sync your health data including steps, heart rate, sleep, and more.
            </p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
