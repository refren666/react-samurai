//  object with classes
import classes from './ProfileInfo.module.css'

// console.log(classes)

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profile__theme__image}
                     src="https://www.adorama.com/alc/wp-content/uploads/2018/08/san-juans-feature-1024x464.jpg"
                     alt="mountains"/>
            </div>
            <div>
                <img className={classes.profile__image}
                     src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"
                     alt="pussy"/>
            </div>
        </div>
    )
}

export default ProfileInfo;