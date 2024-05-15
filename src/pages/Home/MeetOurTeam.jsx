import { useState } from "react";

import MeetOurTeamCard from "./MeetOurTeamCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";

const MeetOurTeam = () => {
  const [teams, setTeams] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { isPending, isError } = useQuery({
    queryKey: ["Teams"],
    queryFn: async () => {
      const response = await axiosSecure.get('/teams');
      setTeams(response.data);
      return response.data;
    },
  });
  console.log(teams)

  if (isPending) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        <PuffLoader color="#32cd32"></PuffLoader>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        <p className="text-3xl">Failed To Fetch Data</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-7">Meet Our Team</h1>
        <p className="px-5 md:mx-32">
          Meet the team crafting culinary magic daily. From chefs to customer
          service pros, our dedicated crew ensures every experience is
          deliciously memorable. Get to know the faces behind the flavors.
        </p>
      </div>
      <div className="flex mt-6">
        <Marquee pauseOnHover={true}>
          {teams.map((team) => (
            <MeetOurTeamCard key={team._id} team={team}></MeetOurTeamCard>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default MeetOurTeam;
