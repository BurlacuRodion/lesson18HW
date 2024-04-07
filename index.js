const arr =[7,3,6,0, 'f'];

const sortArr = (arr, direction) => {
   
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'arr contains not number elements'
        }
    }

    if(direction === 'ASC') {
        return arr.sort((a,b)=> a-b);
    }else {
        return arr.sort((a,b)=> b-a);
    }
}
//console.log(sortArr(arr, 'ASC'))

//=====================================================//

function returnIndex(arr,el) {
    const res = arr.findIndex(item => item === el)

    if (res != -1) return res
    else return 'not found' 
}
console.log(returnIndex([3,7,2],4))

//----------------------------------------------------//

const array = [2,6,7,9,25,30]

function returnSqrt(arr) {
    return arr.filter((item)=> Number.isInteger(Math.sqrt(item)))
}

console.log(returnSqrt(array))

//=====================================================//

function returnTwoArrays(arr) {
    const evenArray = arr.filter((item)=> item%2 === 0)
    const oddArray = arr.filter((item)=> item%2 !== 0)

    return `evenArray:[${evenArray}], oddArray:[${oddArray}]`

    // return arr.reduce((acc,curr)=>{
    //     if(curr%2 === 0) {
    //         acc.evenList.push(curr)
    //         return acc
    //     }
    //     acc.oddList.push(curr)
    //     return acc
    // },
    // {
    //     evenList: [],
    //     oddList:[]
    // });
}
console.log(returnTwoArrays(array))
