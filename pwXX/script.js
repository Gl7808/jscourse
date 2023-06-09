// const container = document.getElementById('container')
//
// const bosses = {
//     LOP : {
//         name : "Lord of Percussion",
//         chapter : '1-1',
//         dropRate : 2,
//         itemDrops : 3,
//         itemList : {
//             PerfectStone : {
//                 name : 'Perfect Stone',
//                 dropRate : 43.3,
//                 img : "https://www.pwdatabase.com/images/icons/generalm/5639.png"
//             },
//             PieceOfSkeleton : {
//                 name : 'Piece Of Skeleton',
//                 dropRate: 33.3,
//                 img : "https://www.pwdatabase.com/images/icons/generalm/15229.png"
//             },
//             BrokenDrum : {
//                 name : 'Broken Drum',
//                 dropRate: 16.6,
//                 img : "https://www.pwdatabase.com/images/icons/generalm/15228.png"
//             },
//             CrusadeOrder : {
//                 name : 'Crusade Order',
//                 dropRate : 6.6,
//                 img : "https://www.pwdatabase.com/images/icons/generalm/13634.png"
//             }
//         },
//     }
// }
//
// container.innerHTML = `<p>${bosses.LOP.name}</p>
//                         <div>
//                         <p><img src="${bosses.LOP.itemList.PerfectStone.img}"> ${bosses.LOP.itemList.PerfectStone.name}</p>
//                         <p>${bosses.LOP.itemList.PerfectStone.dropRate}</p>
//                         </div>
//                         <div>
//                         <p><img src="${bosses.LOP.itemList.PieceOfSkeleton.img}"> ${bosses.LOP.itemList.PieceOfSkeleton.name}</p>
//                         <p>${bosses.LOP.itemList.PieceOfSkeleton.dropRate}</p>
//                         </div>
//                         <div>
//                         <p><img src="${bosses.LOP.itemList.BrokenDrum.img}"> ${bosses.LOP.itemList.BrokenDrum.name}</p>
//                         <p>${bosses.LOP.itemList.BrokenDrum.dropRate}</p>
//                         </div>
//                         <div>
//                         <p><img src="${bosses.LOP.itemList.CrusadeOrder.img}"> ${bosses.LOP.itemList.CrusadeOrder.name}</p>
//                         <p>${bosses.LOP.itemList.CrusadeOrder.dropRate}</p>
//                         </div>
//
// `


// function solution(str, ending){
//     // TODO: complete
//     str.endsWith(ending) ? true : false
// }
//
// console.log(solution('abcde', 'cde'))


function findUniq(arr) {

    return Array.from(new Set(arr))

}

findUniq([1, 1, 2, 1, 1])
