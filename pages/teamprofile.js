import React from "react";
import Head from "next/head";
import Card from "../components/Card";

const TeamProfile = () => {
  const team_profile = [
    {
      name: "Joven Chan",
      roles: "Project Leader, Coder, Documentor",
      email: "swjchan002@mymail.sim.edu.sg",
      img: "/images/profile-pic/man-avatar.jpg",
    },
    {
      name: "Bryan Ong",
      roles: "Coder, Documentor",
      email: "bcong002@mymail.sim.edu.sg",
      img: "/images/profile-pic/man-avatar.jpg",
    },
    {
      name: "Aurellya",
      roles: "Coder, Documentor",
      email: "a036@mymail.sim.edu.sg",
      img: "/images/profile-pic/woman-avatar.jpg",
    },
    {
      name: "Gladys Ang",
      roles: "Coder, Documentor",
      email: "jpgang001@mymail.sim.edu.sg",
      img: "/images/profile-pic/woman-avatar.jpg",
    },
    {
      name: "Vanisse",
      roles: "Coder, Documentor",
      email: "jzvchio001@mymail.sim.edu.sg",
      img: "/images/profile-pic/woman-avatar.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>FYP-22-S2-10 - Team Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="py-5">
        <h3 className="text-center">Meet The Team</h3>
        {/* <h3 className="text-center">- Team GABJV -</h3> */}
        <div className="pb-5 container">
          <div className="mt-5 row row-s cols-1 row-cols-md-3">
            {team_profile.map((profile, index) => (
              <div className="col px-4" key={index}>
                <Card profile={profile} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamProfile;
