import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button, Input, Alert, Space } from "antd";
import axios from "axios";
import AllItemsForUser from "./AllItemsForUser.jsx";
import ImagesUplead from "./ImagesUplead.jsx";
export default function Basic() {
  const [img, setImg] = useState("");
  const location = useLocation();
  const imagesUpload = useNavigate();
  console.log(location, "from usericol");
  const [cerentImg, setCuretImg] = useState(location.state.user.profile);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/changeInfo/${location.state.user.user_id}`, {
      state: { user: location.state.user },
    });
  };
  const handleImages = () => {
    navigate(`/uploadImage/${location.state.user.user_id}`, {
      state: { user: location.state.user },
    });
  };
  
  const UploadImg = () => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "clzrszf3");
    axios
      .post("https://api.cloudinary.com/v1_1/dp54rkywx/image/upload", formData)
      .then((response) => {
        console.log(response);
        console.log(response.data.secure_url);
        let imgurl = response.data.secure_url;
        setCuretImg(response.data.secure_url);
        console.log("img for the user", imgurl);
        axios
          .put(
            `http://localhost:3000/api/user/updateUser/${location.state.user.user_id}`,
            {
              profile: imgurl,
            }
          )
          .then((response) => {
            console.log(response);
          });
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/accounts/itemofuser/${location.state.user.user_id}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
      <div>
        <div className="justify-content-center">
          <div md="9" lg="7" xl="5" className="mt-5">
            <div style={{ borderRadius: "15px" }}>
              <div className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <label htmlFor="image">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          setImg(e.target.files[0]);
                        }}
                      />
                      <img
                        style={{ width: "180px", borderRadius: "10px" }}
                        src={cerentImg}
                        alt="Generic placeholder image"
                        fluid
                      />
                    </label>
                    <Button
                      onClick={() => {
                        UploadImg();
                      }}
                    >
                      change the img
                    </Button>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div>{location.state.user.username}</div>
                    <div>User</div>

                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">{location.state.user.email}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>

                    <Button onClick={handleClick}>Change my info</Button>
                    <div className="oneUserItems">
                      {data.map((item, i) => {
                        console.log(data)
                        return <AllItemsForUser key={i} item={item} />;
                      })}
                    </div>
                    <div>
                      <Button onClick={handleImages}>add an item</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
