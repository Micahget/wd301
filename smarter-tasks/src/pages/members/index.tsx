import MemberList from "./MemberList";
import NewMemeber from "./NewMember";
const Projects = () => {
  return (
    <>
      <div className="member flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMemeber />
      </div>
      <MemberList />
    </>
  )
}
export default Projects;