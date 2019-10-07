import React, { useState } from "react";
import axios from "axios";

const fetch = function() {
  "https://dog.ceo/api/breeds/image/random";
};

function Root() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: "0 30rem" }}>
      <br />
      <br />
      <center>
        <button
          onClick={() => {
            setLoading(true);
            axios
              .get(`https://jsonplaceholder.typicode.com/users`)
              .then(res => {
                const persons = res.data;
                // this.setState({ persons });
                // alert(JSON.stringify(res.data, null, 2));
                setData(res.data);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          Fetch
        </button>
        {/* <br />
        <br />
        <textarea
          value={JSON.stringify(data, null, 2)}
          readOnly
          cols={100}
          rows={25}
        /> */}
      </center>
      {loading ? (
        <center>
          <br />
          Loading...
          <br />
        </center>
      ) : (
        data.map(item => (
          <div key={item.id}>
            <br />
            <pre>{JSON.stringify(item, null, 2)}</pre>
            <hr />
            <br />
          </div>
        ))
      )}
    </div>
  );
}

export default Root;
