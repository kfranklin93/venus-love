import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState([
    {
      name: "Sunny",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwOTk0NDgzMTA4NzE3NjU2/gettyimages-1000567242.jpg",
    },
    {
      name: "Grinch",
      url: "https://s.yimg.com/ny/api/res/1.2/KDYo6xq0N8QsYEGN_9HNJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/d4bcd340-06ea-11ea-97cd-43019cd56ad6",
    },
  ]);

  // Regular bad way to push to an array in React
  // const people =[];
  // people.push('kazi', 'sunny')

  // Good way to push to an array in React
  // setPeople([...people, 'kazi', 'sunny'])

  return (
    <div>
      <h1>Tinder Cards Rendered</h1>

      {people.map((person) => (
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={['up', 'down']}

         >
            {/* keys  allows React to efficiently re-render a list; makes app faster when it grows in scale; great for enterprise */}
          <div 
          style={{ backgroundImage: `url(${person.url})`}}
          className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
