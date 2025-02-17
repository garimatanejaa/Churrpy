import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen pt-20 bg-yellow-50 text-gray-800">
  <div className="max-w-2xl mx-auto p-4 py-8">
    <div className="bg-white shadow-md rounded-xl p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-yellow-700">Profile</h1>
        <p className="mt-2 text-gray-600">Your profile information</p>
      </div>

      {/* Avatar Upload Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <img
            src={selectedImg || authUser.profilePic || "/avatar.png"}
            alt="Profile"
            className="size-32 rounded-full object-cover border-4 border-yellow-300"
          />
          <label
            htmlFor="avatar-upload"
            className={`absolute bottom-0 right-0 bg-yellow-500 hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
          >
            <Camera className="w-5 h-5 text-white" />
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
            />
          </label>
        </div>
        <p className="text-sm text-gray-500">
          {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
        </p>
      </div>

      {/* Profile Info */}
      <div className="space-y-6">
        <div className="space-y-1.5">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <User className="w-4 h-4 text-yellow-500" />
            Full Name
          </div>
          <p className="px-4 py-2.5 bg-yellow-100 rounded-lg border">{authUser?.fullName}</p>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Mail className="w-4 h-4 text-yellow-500" />
            Email Address
          </div>
          <p className="px-4 py-2.5 bg-yellow-100 rounded-lg border">{authUser?.email}</p>
        </div>
      </div>

      {/* Account Information */}
      <div className="mt-6 rounded-xl p-6 shadow-sm bg-white border border-yellow-200">
  <h2 className="text-lg font-medium text-yellow-700 mb-4">Account Information</h2>
  <div className="space-y-3 text-sm">
    <div className="flex items-center justify-between py-2 border-b border-gray-300">
      <span>Member Since</span>
      <span>{authUser.createdAt?.split("T")[0]}</span>
    </div>
    <div className="flex items-center justify-between py-2">
      <span>Account Status</span>
      <span className="text-green-600 font-semibold">Active</span>
    </div>
  </div>
</div>
    </div>
  </div>
</div>

  );
};

export default ProfilePage;
