import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../redux/actions";

const UserInfo = () => {
  const usersInfo = useSelector(state => state.usersInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.fetchUserInfo());
  }, [dispatch]);

  const getUserDataHtml = () => {
    console.log("usersInfo=", usersInfo);
    return usersInfo.map((element, key) => {
      return (
        <tr key={key}>
          <td>
            <img alt="" src={element.avatar} />
          </td>
          <td>
            {element.name.title} {element.name.first} {element.name.last}
          </td>
          <td>{element.email}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <tbody>{getUserDataHtml()}</tbody>
    </table>
  );
};

export default UserInfo;
