// User card component
function UserCard({ user }) {
  return (
    <div className="card">
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

// Skills list component
function SkillsList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

// Main component
export function ObjectAndArrayProps() {
  const user = {
    name: "varsh",
    role: "developer",
  };

  const skills = ["React", "TailwindCSS", "Vite",];

  return (
    <>
      <h1>Passing Objects and Arrays as Props</h1>
      <UserCard user={user} />
      <SkillsList skills={skills} />
    </>
  );
}