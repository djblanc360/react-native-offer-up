import bookmark from "../assets/icons/bookmark.png"
import home from "../assets/icons/home.png"
import plus from "../assets/icons/plus.png"
import profile from "../assets/icons/profile.png"
import leftArrow from "../assets/icons/left-arrow.png"
import menu from "../assets/icons/menu.png"
import search from "../assets/icons/search.png"
import upload from "../assets/icons/upload.png"
import rightArrow from "../assets/icons/right-arrow.png"
import logout from "../assets/icons/logout.png"
import eyeHide from "../assets/icons/eye-hide.png"
import eye from "../assets/icons/eye.png"
import play from "../assets/icons/play.png"
import account from "../assets/icons/account.png"
import favorite from "../assets/icons/favorite.png"
import unfavorite from "../assets/icons/un-favorite.png"
import list from "../assets/icons/list.png"
import groupHome from "../assets/icons/group-home.png"

// Define a type for the icons
interface Icons {
  [key: string]: string
}

// Export the icons object with the defined type
const icons: Icons = {
  play,
  bookmark,
  home,
  plus,
  profile,
  leftArrow,
  menu,
  search,
  upload,
  rightArrow,
  logout,
  eyeHide,
  eye,
  account,
  favorite,
  unfavorite,
  list,
  groupHome,
}

export default icons
