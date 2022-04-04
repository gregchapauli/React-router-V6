import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    let payload = {
      token: "Qf9LqFB_RM_F6B_RRB1fKA",
      data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 10,
      },
    };

    axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: payload,
    }).then((resp) => {
      setData(resp.data[params.profilId]);
    });
  }, [params.profilId]);

  const { email, name, phone } = data;

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <strong>Nom:</strong> {name}
      </li>
      <li className="list-group-item">
        <strong>Email:</strong> {email}
      </li>
      <li className="list-group-item">
        <strong>Tel:</strong> {phone}
      </li>
    </ul>
  );
};

export default Profile;
