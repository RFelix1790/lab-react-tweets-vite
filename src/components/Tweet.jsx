import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";
function Tweet({ Tweet }) {
  const { user, timestamp, message } = Tweet;
  const { name, image, handle } = user;
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
