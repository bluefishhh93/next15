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
            POSITION: [15, 0, 0],
            SCALE: 3,
            ROTATION : [0, Math.PI, 0]
        },
        GLASS_WINDOWS: {
            POSITIONS: [
                [0.3, 0, -15] as [number, number, number],
                [10, 0, -15] as [number, number, number],
            ],
            SCALE: [5, 4.9, 3.4] as [number, number, number],
            ROTATION: [0, Math.PI / 2, 0] as [number, number, number],
        },
        GLASS_WINDOWS_2: {
            POSITIONS: [5, -0.4, 0.15] as [number, number, number],
            SCALE: [1, 3.7, 1.2] as [number, number, number],
            ROTATION: [0, 0, 0] as [number, number, number],
        },
        HOUSE_PLANT: {
            POSITION: [8, 0, 0],
            SCALE: 1,
        }
    },
    ARTWORKS: {
        WALL_Z_POSITION: -9.8,
        VERTICAL_POSITION: 3,
    }
}