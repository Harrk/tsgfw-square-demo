import { Entity } from "tsgfw/core";
import { Rect } from "tsgfw/math";
import { RendererInterface } from "tsgfw/renderer";

export class Wall extends Entity { 
    render(renderer: RendererInterface) {
        renderer.drawRect(new Rect(
            this.position.x, this.position.y, this.collision_rect.width, this.collision_rect.height
        ), 'gray');
    }
}