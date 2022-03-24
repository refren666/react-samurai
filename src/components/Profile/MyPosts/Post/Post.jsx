//  object with classes
import classes from './Post.module.css'

// console.log(classes)

const Post = (props) => {
    return (
        <div className={classes.post__item}>
            <img
                src="https://cdn.yourpng.com/uploads/preview/shrek-high-resolution-hd-png-transparent-images-11623573654tombfgz9xu.png"
                alt="user__pfp"/>

            <div>{props.message}</div>

            <div>
                <span>❤ {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;