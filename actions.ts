import { Action } from "bga-framework/game/Action";
import type { BulletH } from "./game";

export const PlaceBullet = new Action("PLACE_BULLET",
    (game: BulletH, playerId: number, args: any) => {
        console.log(`Player ${playerId} requested PlaceBullet`, args);
        // actual logic will go here
    }
);

export const UseAction = new Action("USE_ACTION",
    (game: BulletH, playerId: number, args: any) => {
        console.log(`Player ${playerId} used an Action`, args);
    }
);

export const UsePattern = new Action("USE_PATTERN",
    (game: BulletH, playerId: number, args: any) => {
        console.log(`Player ${playerId} used a Pattern`, args);
    }
);

export function registerActions(game: BulletH) {
    game.actions.register(PlaceBullet);
    game.actions.register(UseAction);
    game.actions.register(UsePattern);
}