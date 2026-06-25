type DashboardCardProps = {
  title: string;
  value: string;
  icon: string;
};

function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          fontSize: "35px",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;