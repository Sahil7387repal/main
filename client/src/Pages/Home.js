import Layout from "../Components/Layout/Layout"
import { useAuth } from "../context/auth";
const Home=(props)=>{
    const [auth,setAuth]=useAuth();
    return(
        <Layout>
            <h1>hoemeh</h1>
            {/* <pre>{auth.name}</pre> */}
        <pre> {JSON.stringify(auth,null,4)}</pre>
        </Layout>
    )
}
export default Home;