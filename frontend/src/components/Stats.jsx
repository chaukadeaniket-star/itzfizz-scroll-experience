const stats = [
  {
    value: "87%",
    label: "PERFORMANCE",
  },
  {
    value: "94%",
    label: "ENGAGEMENT",
  },
  {
    value: "76%",
    label: "EXPERIENCE",
  },
];

const Stats = () => {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div className="stat" key={stat.label}>
          <div className="stat-number">
            {stat.value}
          </div>

          <div className="stat-label">
            {stat.label}
          </div>

          <div className="stat-index">
            0{index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;