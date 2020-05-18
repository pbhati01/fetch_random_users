import { dataService } from "../../api";

export const loadUsersInfo = usersInfo => ({
  type: "LOAD_USER_INFO",
  usersInfo
});

export const fetchUserInfo = () => {
  return dispatch => {
    dataService
      .fetchUserData()
      .then(resp => {
        const data = resp.data.results;
        const usersInfo = [];
        data.forEach(element => {
          const {
            name,
            email,
            picture: { medium: avatar }
          } = element;
          usersInfo.push({ name, email, avatar });
        });
        console.log("usersInfo=========", usersInfo);
        dispatch(loadUsersInfo(usersInfo));
      })
      .catch(err => {
        console.log("err", err);
      });
  };
};
