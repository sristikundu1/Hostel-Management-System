import { useEffect, useState } from "react";
import Card from "./Card";


const MemberShip = () => {
    const [memberShips, setMemberShip] = useState([]);

    useEffect(() => {
        fetch('membership.json')
            .then(res => res.json())
            .then(data => setMemberShip(data)
            )
    }, [])
    return (
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-center font-bold text-3xl text-[#370617] mb-5">Membership Packages</h2>

         <div className="grid grid-cols-3 gap-3 mb-10">
         {
            memberShips.map(memberShip => <Card
            key={memberShip.id}
            memberShip={memberShip}>

            </Card>)
          }
         </div>

        </div>
    );
};

export default MemberShip;