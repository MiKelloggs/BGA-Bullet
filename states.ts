import { GameState } from "bga-framework/game/GameState";

export const States = {
    INIT: new GameState("INIT"),
    OPTION_PHASE: new GameState("OPTION_PHASE"),
    END_PHASE: new GameState("END_PHASE"),
    CLEANUP: new GameState("CLEANUP"),
    GAME_END: new GameState("GAME_END"),
};