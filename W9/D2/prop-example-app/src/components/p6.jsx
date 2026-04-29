// composition
// import{React} from "react";
function ProfileAvatar({ user }){
    return <img src={`/${user.img} png`} alt={user.name}/>
}
function DashBoardLayout({ children }) {
  return <div className="layout">children</div>;
}
function AccountSidebar({ children }) {
  return <aside className="sidebar">{children}</aside>;
}
function UserInfoPanel({ children }) {
  return <aside className="user-panel">{children}</aside>;
}
export function CompositionDemo(params) {
  const user = { name: "varsh" };
  return (
    <div>
      <h3>composition solution</h3>
      <DashBoardLayout>
        <AccountSidebar>
          <UserInfoPanel>
            <ProfileAvatar user={user} />
          </UserInfoPanel>
        </AccountSidebar>
      </DashBoardLayout>
    </div>
  );
}
