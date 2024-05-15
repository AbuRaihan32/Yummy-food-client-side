import { useEffect, useState } from "react";

import MeetOurTeamCard from "./MeetOurTeamCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Marquee from "react-fast-marquee";

const MeetOurTeam = () => {
  const [teams, setTeams] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/team")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err.message));
  }, [axiosSecure]);
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
