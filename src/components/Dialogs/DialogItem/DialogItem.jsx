import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

// Відмальовує кожного окремого юзера
const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`

    return (
        <div  className={classes.dialogItems}>
            <NavLink to={path} className={userLink => userLink.isActive ? classes.active : classes.dialog}>
                <img className={classes.userPhoto} src={props.photo} alt="user pfp"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;