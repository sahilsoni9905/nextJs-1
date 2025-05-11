import Image from "next/image";
import axios from 'axios';

async function getUserDetails() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}
export default async function Home() {
  const userDetails = await getUserDetails();
  console.log(userDetails);
  return (
     <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails?.name}
          </div>
          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
