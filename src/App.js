import logo from './logo.svg';
// import handlebuger from ''
import './App.css';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';
import { SlOptionsVertical } from 'react-icons/sl'
import Sidebar from './components/sidebar/sidebar';
import Topnav from './components/topnav/Topnav';
import Profile from './components/profile/Profile';
import Linecharts from './components/charts/Linecharts';
import RoundChart from './components/charts/RoundChart';
import RefferTable from './components/table/RefferTable';
import ProductVideo from './components/Product/ProductVideo';
function App() {
  return (
    <div className="App">
      <div class="wrapper">

        <Sidebar />


        <div id="content">

          <Topnav />

          <div className="container">
            <div className="overview-heading">

              <h4>Overview</h4>
              <button className='btn btn-Add'>Add Funds <span className='plus rounded'>+</span></button>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 col-lg-4  order-md-2 p-md-0 m-md-0">
                <div className="row">
                  <div className="col-md-12 p-0 m-0">
                    <Profile />
                  </div>
                  <div className="col-md-12 p-0 mx-0 mt-3">
                   <ProductVideo/>
                  </div>
                </div>
              </div>
              <div className="col-md-8 p-0 m-0">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="Statistics_Card">
                      <Linecharts />
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="Statistics_Card">
                      <RoundChart />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <section className=''>
                      <div className="reffer_table_section">
                        <RefferTable />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </div >
  );
}

export default App;
