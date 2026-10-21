import { GameGUI } from "bga-framework/ui/GameGUI";

/**
 * Main UI controller
 */
export class BulletHGUI extends GameGUI {

    setup(gamedata: any) {
        console.log("UI setup:", gamedata);

        // Add a very simple visible element
        const container = document.createElement("div");
        container.id = "bulletH_board";
        container.innerText = "BulletH UI Loaded";
        container.classList.add("bulletH-test-box");

        document.body.appendChild(container);
    }
}

export const gui = new BulletHGUI();