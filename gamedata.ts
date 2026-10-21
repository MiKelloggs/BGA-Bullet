export interface Player {
    id: number;
    name: string;

    // Will expand as implementation progresses:
    // life: number;
    // ap: number;
    // bullets: ...
}

export interface Players {
    [playerId: number]: Player;
}