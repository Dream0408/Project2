import React from "react";
import "./users.scss";
import useGetData from "../../custom-hooks/useGetData";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";

const Users = () => {

  const { data: usersData } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("user deleted!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className="pt-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              {usersData?.map((user) => (
                    <tr key={user.uid}>
                      <td>
                        <div class="img-resize">
                          <img src={user.photoURL} alt="" />
                        </div>
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(user.uid);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>

            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
