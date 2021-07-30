import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

const index = () => {

  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef();

  useEffect(async () => {

    if (searchValue !== "" || searchType === "all") {
      const res = await axios({
        method: 'post',
        url: 'https://arrow-level-raptor.glitch.me/query',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          query: `{
            posts${searchType === "all" ? "" : `(${searchType}:"${searchValue}")`}{
              title
              category
              description
              content{
                detail
                qty
              }
              vlt{
                city
                state
                pincode
              }
            }
        }`,
          variables: {}
        })
      })

      if (res.data.data.posts) {
        setData(res.data.data.posts);
      }
      setSearchValue("");
    }

  }, [searchValue, searchType])

  const typeChangeHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <Layout>
        <h1>Search the Required Details below</h1>
        <div  >
          <div style={{ display: "grid", gridGap: "1rem", gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingTop: "2rem", paddingBottom: "3rem" }}>
            <h2 style={{ margin: "0.4rem" }}>Search Type:</h2>
            <select name="cars" id="cars" onChange={(e) => { return setSearchType(e.target.value) }}>
              <option value="all">All</option>
              <option value="category">Category</option>
              <option value="pincode">Pincode</option>
              <option value="city">City</option>
              <option value="state">State</option>
            </select>
            <input type="text" name="search" ref={ref} placeholder={"Search..."} disabled={searchType === "all"} />
            <button type="button" onClick={() => (setSearchValue(ref.current.value))} >search</button>
          </div>
          <div className="index-wrapper">
            {data.length === 0 ? <h2>Loading...</h2> :
              data.map((item, i) => {
                return <div className="single-data" key={i}>
                  <h2>{item.title}</h2>
                  <p>
                    Category :
                    {item.category.map((cat, i) => {
                      return <span key={i}>{` ${cat}`}</span>
                    })}
                  </p>
                  <p>
                    {item.description}
                  </p>
                  <div>
                    {
                      item.content.map((detail, i) => {
                        return <p key={i}>
                          <span>
                            {detail.detail}
                          </span>
                          <span>
                            {detail.qty}
                          </span>
                        </p>
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

export default index

