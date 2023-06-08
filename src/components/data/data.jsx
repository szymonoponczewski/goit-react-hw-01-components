import PropTypes from "prop-types";
import css from "./data.module.css";

export const getRandomColor = () => {
  const colors = [
    "#89cff0",
    "#9adedb",
    "#b39eb5",
    "#ff694f",
    "#99c5c4",
    "#bee7a5",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const Statistics = ({ title = "Upload stats", data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css["stat-list"]}>
        {data.map(({ label, percentage, id }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
