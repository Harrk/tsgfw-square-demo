import { Entity } from 'tsgfw/core';
import { Vector2, Rect } from "tsgfw/math";
import { Input } from "tsgfw/systems";
import { RendererInterface } from "tsgfw/renderer";

import { gameContainer } from "../squares.ts";

export class Player extends Entity {
    speed: number = 2;
    velocity: Vector2 = new Vector2();
    input: Input;

    onReady() {
        this.input = gameContainer.getSystem<Input>("Input");
    }

    update() {
        const move = new Vector2(
            Number(this.input.isKeyPressed('D')) - Number(this.input.isKeyPressed('A')),
            Number(this.input.isKeyPressed('S')) - Number(this.input.isKeyPressed('W'))
        );

        this.velocity = new Vector2(
            move.x * this.speed,
            move.y * this.speed
        );

        this.moveAndSlide(this.velocity);
    }

    render(renderer: RendererInterface) {
        renderer.drawRect(new Rect(
            this.collision_rect.x, this.collision_rect.y, this.collision_rect.width, this.collision_rect.height
        ), 'orange');
    }
}