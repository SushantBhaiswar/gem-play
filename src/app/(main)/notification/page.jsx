"use client";

import CustomButton from "@/components/common/button";
import MultipleSelect from "@/components/common/select";
import SelectFields from "@/components/common/selectFields";
import StatusButton from "@/components/common/statusButton";
import { PlusCircle } from "lucide-react";
import moment from "moment";
const options = [
  { value: "chocolate", label: "Email" },
  { value: "strawberry", label: "SMS" },
  { value: "vanilla", label: "Vanilla" },
];

const Notifications = [
  {
    id: "1",
    title: "Welcome to our platform",
    message:
      "Thank you for joining our platform. We are excited to have you here!",
    status: "sent",
    type: "email",
    priority: "medium",
    createdAt: new Date(2025, 4, 25, 10, 30),
    scheduledFor: new Date(2025, 4, 25, 11, 0),
  },
  {
    id: "2",
    title: "New feature release",
    message: "We have released a new feature that you might be interested in.",
    status: "pending",
    type: "push",
    priority: "high",
    createdAt: new Date(2025, 4, 29, 15, 45),
    scheduledFor: new Date(2025, 5, 1, 9, 0),
  },
  {
    id: "3",
    title: "Password reset request",
    message: "A password reset was requested for your account.",
    status: "failed",
    type: "sms",
    priority: "high",
    createdAt: new Date(2025, 4, 28, 8, 15),
  },
  {
    id: "4",
    title: "Monthly newsletter",
    message:
      "Check out our monthly newsletter with the latest updates and news.",
    status: "sent",
    type: "email",
    priority: "low",
    createdAt: new Date(2025, 4, 20, 14, 0),
    scheduledFor: new Date(2025, 4, 21, 9, 0),
  },
];
const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return { bg: "bg-yellow-100", txt: "text-yellow-800" };
    case "sent":
      return { bg: "bg-green-100", txt: "text-green-800" };
    case "failed":
      return { bg: "bg-red-100", txt: "text-red-800" };
    default:
      return null;
  }
};

const getTypeBadge = (type) => {
  switch (type) {
    case "email":
      return { bg: "bg-blue-100", txt: "text-blue-800" };
    case "sms":
      return { bg: "bg-gray-100", txt: "text-gray-800" };
    case "push":
      return { bg: "bg-gray-100", txt: "text-gray-800" };
    default:
      return null;
  }
};

const getPriorityBadge = (priority) => {
  switch (priority) {
    case "low":
      return { bg: "bg-gray-100", txt: "text-gray-800" };
    case "medium":
      return { bg: "bg-yellow-100", txt: "text-yellow-800" };
    case "high":
      return { bg: "bg-red-100", txt: "text-red-800" };
    default:
      return null;
  }
};
export default function page() {
  return (
    <div className="p-[10px] text-black">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <div className="flex items-center gap-2">
          <button
            className=" border border-gray-300 text-gray-700 hover:bg-gray-50 
        px-4 py-2 text-sm  rounded-md"
          >
            View Templates
          </button>
          <CustomButton
            icon={<PlusCircle size={16} />}
            name={"Create Notification"}
          />
        </div>
      </div>
      <div className=" overflow-hidden mt-[10px] grid grid-cols-4 w-full gap-1.5 p-4 rounded-lg   shadow-sm border border-gray-200 ">
        <div>
          <p>Status</p>
          <MultipleSelect />
        </div>
        <div>
          <p>Type</p>
          <MultipleSelect />
        </div>
        <div>
          <p>Priority</p>
          <MultipleSelect />
        </div>
        <div>
          <p>Date Range</p>
          <MultipleSelect />
        </div>
      </div>

      <div className="mt-[10px] rounded-lg shadow-sm border border-gray-200 ">
        <table className="divide-y divide-gray-200 min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-gray-700 font-medium ">
                TITLE
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-700 font-medium ">
                STATUS
              </th>
              <th className="px-6 py-4 text-left text-sm  text-gray-700 font-medium ">
                TYPE
              </th>
              <th className="px-6 py-4 text-left text-sm  text-gray-700 font-medium ">
                PRIORITY
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-700 font-medium ">
                CREATED
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-700 font-medium ">
                SCHEDULED
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-700 font-medium ">
                SCHEDULED
              </th>
            </tr>
          </thead>

          <tbody>
            {Notifications.map((notification) => {
              return (
                <tr key={notification.id}>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    <div className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {" "}
                      {notification.message}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    <StatusButton
                      color={getStatusColor(notification.status)}
                      name={notification.status}
                    />
                  </td>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    <StatusButton
                      color={getTypeBadge(notification.type)}
                      name={notification.type}
                    />
                  </td>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    <StatusButton
                      color={getPriorityBadge(notification.priority)}
                      name={notification.priority}
                    />
                  </td>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    {moment(notification.createdAt).format(
                      "DD MMM YYYY, HH:mm:ss"
                    )}
                  </td>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    {moment(notification.scheduledFor).format(
                      "DD MMM YYYY, HH:mm:ss"
                    )}
                  </td>
                  <td className="px-6 py-4 text-left text-xs font-medium ">
                    {moment(notification.scheduledFor).format(
                      "DD MMM YYYY, HH:mm:ss"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
}
