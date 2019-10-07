import React, { useState, useEffect } from "react";
import axios from "axios";

const fetch = function() {
  "https://dog.ceo/api/breeds/image/random";
};

function Root() {
  const [dog, setDog] = useState({});
  const [loadingDod, setLoadingDog] = useState(false);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(async () => {
    setLoadingDog(true);
    const result = await axios("https://dog.ceo/api/breeds/image/random");
    setDog(result.data);
    setLoadingDog(false);
  }, []);

  return loadingDod ? (
    <center>
      <br />
      ...loading dog...
    </center>
  ) : (
    <div style={{ padding: "0 30rem" }}>
      <br />
      <br />
      <center>
        <img src={dog.message} alt="dog" />
        <br />
        <br />
        <button
          onClick={() => {
            setLoadingUsers(true);
            axios
              .get(`https://jsonplaceholder.typicode.com/users`)
              .then(res => {
                const persons = res.data;
                // this.setState({ persons });
                // alert(JSON.stringify(res.data, null, 2));
                setUsers(res.data);
              })
              .finally(() => {
                setLoadingUsers(false);
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
      {loadingUsers ? (
        <center>
          <br />
          ...loading users...
          <br />
        </center>
      ) : (
        users.map(item => (
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
