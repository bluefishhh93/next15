export function calculateArtworkPositions(
    roomWidth: number,
    artworkCount: number,  // Số lượng tranh trong phòng
    wallZPosition: number = -9.8,
) : [number, number, number][]{
      // Tính khoảng cách giữa các tranh
    const spacing = roomWidth / (artworkCount + 1);
    
    return Array.from({ length: artworkCount }, (_, i) => {
        // Tính toán tọa độ x để đặt tranh
        // (i + 1) * spacing: chia đều không gian
        // - roomWidth / 2: điều chỉnh để tranh nằm giữa phòng
        const x = spacing * (i + 1) - roomWidth / 2
        return [x, 3, wallZPosition]
    })
}