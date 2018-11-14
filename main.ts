//import { Point } from "./point";
import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);
component.onClick();
console.log(`like ${component.likesCount} selected ${component.isSelected}`);
