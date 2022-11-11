// import React from "react";
// import Base from "../../Base";
// import userContext from "../../Context/UserContext";
// const About = () => {
//   return (
//     <div>
//       <userContext.Consumer>
//         {(user) => (
//           <Base>
//             <h1>About pages</h1>
//             <p>Name: {user.name}</p>
//             <p>Roll: {user.Roll}</p>
//           </Base>
//         )}
//       </userContext.Consumer>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { useContext } from "react";
import Base from "../../Base";
import userContext from "../../Context/UserContext";
const About = () => {
  const user = useContext(userContext);
  console.log(user);
  return (
    <div>
      <Base>
        <h1>About pages</h1>
        <p>Name: {user.name}</p>
        <p>Roll: {user.Roll}</p>
      </Base>
    </div>
  );
};

export default About;
