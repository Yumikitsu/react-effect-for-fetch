import UsersList from "./components/UsersList"

function UsersSection() {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList />
      </div>
    </section>
  )
}

export default UsersSection