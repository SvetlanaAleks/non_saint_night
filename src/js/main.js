// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Timer from "./modules/Timer";
import Submit from "./modules/Submit";
import Popup from "./modules/Popup";

$(function () {
  objectFitImages();
  Timer.init();
  Submit.init();
  Popup.init();
});
