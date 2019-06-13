import { LifeGame } from "../../src/lifeGame";

const lifeGame = require("../../src/lifeGame")
const game = new LifeGame(3,3)

describe("main", () => {
    test(" LifeGame is defined", () => {
            expect(LifeGame).toBeDefined()
        }),
       
    test("several book return 23.2", () => {
        let inputs = [0, 0, 0, 0, 0,
            1, 1, 1, 1, 1,
            2, 2, 2, 2,
            3, 3, 3, 3, 3,
            4, 4, 4, 4
        ];
        expect(1).toBe(0)
    })

})