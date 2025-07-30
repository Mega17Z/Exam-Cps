import AdminNavige from "../../components/AdminNavigation/AdminNavige";
import NavScrollExample from "../../components/Navbar/Navbar";

const Admin = () => {
    return ( 
        <>
            <NavScrollExample />
            <div className="container-fluid" style={{ paddingTop: "4rem" }}>
                <AdminNavige />
            </div>
            {/* <h1>Bonjour Admin</h1> */}
        </>
     );
}
 
export default Admin;