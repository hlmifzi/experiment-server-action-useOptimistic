import Client from '../components/Client'
import Server from '../components/Server'

const Home = async () => {
  console.log("server")
  return (
    <>
      <Client>
        <Server />
      </Client>
    </>
  );
}

export default Home
