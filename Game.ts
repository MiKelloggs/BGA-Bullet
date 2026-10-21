import { Game } from "bga-framework/game/Game";
import type { Players, Player } from "./gamedata";
import { States } from "./states";
import { registerActions } from "./actions";

export class BulletH extends Game<Players> {

    constructor() {
        super();
    }

    /**
     * Called when a new game starts
     */
    setup(initialData: any): void {
        console.log("BulletH setup", initialData);

        // Register FSM states
        this.states.register(States.INIT);
        this.states.register(States.OPTION_PHASE);
        this.states.register(States.END_PHASE);
        this.states.register(States.CLEANUP);
        this.states.register(States.GAME_END);

        // Register player actions
        registerActions(this);
    }

    /**
     * Provide per-player visible data
     */
    getPlayerData(playerId: number): Partial<Player> {
        return {
            id: playerId,
            name: this.players[playerId].name
        };
    }
}

export const game = new BulletH();