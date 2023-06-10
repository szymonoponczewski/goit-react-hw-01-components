import PropTypes from "prop-types";
import css from "./friends.module.css";
import clsx from "clsx";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span
              className={clsx(css.status, {
                [css.userOn]: isOnline,
                [css.userOff]: !isOnline,
              })}
            ></span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
