import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";
import { useEffect, useState } from "react";
import {userRequest} from "../../requestMethods";

export const WidgetSm = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const getUsers = async () =>{
            try{
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            }catch{}
        };
        getUsers();
    }, []);
    
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join Members</span>
            <ul className="widgetSmList">
                {users.map(user=>(
                    <li className="widgetSmListItem" key={user._id}>
                    <img src={user.img ||"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}
