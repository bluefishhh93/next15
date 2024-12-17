import { Vec3 } from "@/types";

export const GALLERY_CONFIG = {
    ROOM: {
        WIDTH: 20,
        HEIGHT: 10,
        DEPTH: 20,
    },
    MODELS: {
        SPIRAL_STAIR: {
            POSITION: [5, 0, 5],
            SCALE: 310,
        },
        DC_STAIR: {
            POSITION: [13, 0, 0] as Vec3,
            SCALE: [2.5, 3.5, 2.5] as Vec3,
            ROTATION: [0, Math.PI + 0.1, 0] as Vec3,
        },
        GLASS_WINDOWS: {
            POSITIONS: [
                [0.3, 0, 1] as Vec3,
                [10, 0, 1] as Vec3,
            ],
            SCALE: [5, 4.9, 3.4] as Vec3,
            ROTATION: [0, Math.PI / 2, 0] as Vec3,
        },
        GLASS_WINDOWS_2: {
            POSITIONS: [5, -0.4, 0.15] as Vec3,
            SCALE: [1, 3.7, 1.2] as Vec3,
            ROTATION: [0, 0, 0] as Vec3,
        },
        HOUSE_PLANT: {
            POSITION: [8, 0, 0],
            SCALE: 1,
        },
        BIRCH_TREE: {
            POSITION: [0, 0, 6.5] as Vec3,
            SCALE: 1.3,
            ROTATION: [0, 0, 0] as Vec3,
        },
        RAILING: {
            POSITIONS: [
                [-0.2, 0, 5] as Vec3,
                [-7.2, 0, 5] as Vec3,
            ],
            SCALE: [1.1, 0.7, 0.7] as Vec3,
            ROTATION: [0, 0, 0] as Vec3,
        },
    },
    ARTWORKS: {
        WALL_Z_POSITION: -9.8,
        VERTICAL_POSITION: 3,
    }
}