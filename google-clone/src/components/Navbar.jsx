import gridIcon from "../assets/img/grid_icon.svg"
import avatarPic from "../assets/img/leon.jpg"
import "../assets/css/google.css"

const MenuItem = (props) => {
    return (
        <a href="/">
            <div className="menu-item">{props.content}</div>
        </a>
    );
};

const RenderMenuItems = () => {
    const menu = [
        {content: "Gmail"},
        {content: "Images"},
        {
            content: (
                <img src={gridIcon} alt="icon" />
            ),
        },
        {
            content: (
                <img className="avatarPic" src={avatarPic} alt="avatar" />
            ),
        },
    ]

    return menu.map(m => <MenuItem content={m.content} />)
}

const Navbar = () => {
    return (
        <div className="navbar-comp">
            <RenderMenuItems />
        </div>
    );
};

export default Navbar;