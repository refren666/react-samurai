//  object with classes
import classes from './nav.module.css'
import {NavLink} from "react-router-dom";

// console.log(classes)

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to='/profile'
                         className={navLink => navLink.isActive ? classes.active : classes.nav__item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'
                         className={navLink => navLink.isActive ? classes.active : classes.nav__item}>Dialogs </NavLink>
            </div>
            <div>
                <NavLink to='/news'
                         className={navLink => navLink.isActive ? classes.active : classes.nav__item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'
                         className={navLink => navLink.isActive ? classes.active : classes.nav__item}>Music</NavLink>
            </div>
            {/*classes combination with interpolation*/}
            <div className={`${classes.disabled}`}>
                <NavLink to='/settings'
                         className={navLink => navLink.isActive ? classes.active : classes.nav__item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/friends'
                         className={navLink => navLink.isActive ? classes.active : classes.nav__item}>Friends</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;