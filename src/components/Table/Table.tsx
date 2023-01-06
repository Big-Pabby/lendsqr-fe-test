import React from "react";
import './Table.scss'
import { useState, useEffect } from "react";
import Filter from "../../assets/images/filter.svg"
import axios from "axios";
import UserRow from "./UserRow";
import Pagination from "./Pagination";

const Table = () => {

  const [tableData, setTableData] = useState<any[]>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);

  useEffect(() => {
    fetchTableData()
  }, []);

  const fetchTableData = async () => {
    setLoading(true)
    const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    const editres = res.data
    setTableData(editres)
    setLoading(false)
  }

  const indexOflastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOflastPost - postsPerPage
  const currentPosts = tableData.slice(indexOfFirstPost, indexOflastPost)

  const paginate = (pageNumber : any) => setCurrentPage(pageNumber)

  const handleChange = (e : any ) => {
    setPostsPerPage(e.target.value)
  }

  return (
    <div>
      <div className="table-container">
        <table>
              <thead>
                <tr>
                  <th className="organization-block default">
                    <div className="table-header">
                      <p>organization</p>
                      <div>
                        <img src={Filter} alt="" />
                      </div>
                    </div>
                  </th>

                  <th className="username-block default">
                    <div className="table-header">
                      <p>Username</p>
                      <div>
                        <img src={Filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th className="email-block default">
                    <div className="table-header">
                      <p>Email</p>
                      <div>
                        <img src={Filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th className="no-block default">
                    <div className="table-header">
                      <p>Phone number</p>
                      <div>
                        <img src={Filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th className="date-block default">
                    <div className="table-header">
                      <p>Date joined</p>
                      <div>
                        <img src={Filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th className="status-block default">
                    <div className="table-header">
                      <p>Status</p>
                      <div>
                        <img src={Filter} alt="" />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? <h4>Loading...</h4> :
                  currentPosts.map((data) => {
                    return (
                      <UserRow 
                        key={data.key}
                        orgName={data.orgName}
                        userName={data.userName}
                        email={data.email}
                        phoneNumber={data.phoneNumber}
                        createdAt={data.createdAt}
                      />
                    )
                  })
                }

              </tbody>
            </table>
      </div>
      <div className="pagenav">
        <div className="pageselect">
          <p>Showing</p>
          <select value={postsPerPage} onChange={handleChange} id="">
            <option value="5">5</option>
            <option selected value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <p>out of 100</p>
        </div>
        <Pagination totalPosts={tableData.length} postsPerPage={postsPerPage} paginate={paginate}/>
      </div>
    </div>
  );
};

export default Table;
