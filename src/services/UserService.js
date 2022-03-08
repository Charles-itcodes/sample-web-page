 import axios from "axios";
const Base_URL="http://localhost:8080/event/api/v1/users";

class UserService {
getAllUsers=async()=>{
    return await axios.get(Base_URL).then(response =>response);   
};

getPersonById = async (id) => {
    return await axios.get(Base_URL + id).then(response => response);
};

savePerson = async (data) => {
    return await axios.post(Base_URL, data).then(response => response);
};

updatePerson = async (data) => {
    return await axios.put(Base_URL, data).then(response => response);
};

deletePersonById = async (id) => {
    return await axios.delete(Base_URL + id).then(response => response);
};


}
export default UserService; 