import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-16 md:px-24 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border-t-8 border-green-500">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Contact Details</h1>

        <div className="space-y-6">
          {/* Name */}
          <div className="flex items-center gap-4">
            <User className="text-green-600" size={28} />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-semibold">Amrendra Kumar Singh</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-green-600" size={28} />
            <div>
              <p className="text-sm text-gray-500">Mobile</p>
              <p className="text-lg font-semibold">+91 88390 46447</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-green-600" size={28} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold">aks22cse@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <MapPin className="text-green-600" size={28} />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-semibold">Sasaram, Bihar, India</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FRESHTO. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;
